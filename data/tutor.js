/* Optional in-page tutor.
   Calls the Anthropic Messages API directly from the browser using a key the
   user pastes in themselves. The key lives in this browser's localStorage and
   is sent only to api.anthropic.com — it is never in the repo, never on the
   server, and never sent anywhere else.

   Raw fetch rather than the SDK: this is a static page with no build step or
   package manager, so there is nothing to bundle an SDK with. */

window.TLTUTOR = (function () {
  'use strict';

  var KEY_STORE = 'tl-anthropic-key';
  var ENDPOINT = 'https://api.anthropic.com/v1/messages';
  var MODEL = 'claude-opus-5';

  function getKey() {
    try { return localStorage.getItem(KEY_STORE) || ''; } catch (e) { return ''; }
  }
  function setKey(k) {
    try {
      if (k) localStorage.setItem(KEY_STORE, k);
      else localStorage.removeItem(KEY_STORE);
    } catch (e) {}
  }
  function hasKey() { return !!getKey(); }
  function maskKey() {
    var k = getKey();
    return k ? k.slice(0, 12) + '…' + k.slice(-4) : '';
  }

  /* The tutor's brief. Kept specific: it knows the qualification, the student's
     situation, and the exact question they just got wrong. */
  function systemFor(ctx) {
    return [
      'You are tutoring Jack, who is resitting the Pearson T Level Technical Qualification in Digital Software Development (the 2025 "Gen 2" specification) in the Autumn 2026 series. He is aiming for grade A.',
      '',
      'He has just answered a multiple-choice revision question incorrectly and wants to understand it properly.',
      '',
      'THE QUESTION: ' + ctx.q,
      'THE OPTIONS: ' + ctx.options.map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + o; }).join('  '),
      'HE ANSWERED: ' + (ctx.picked >= 0 ? String.fromCharCode(65 + ctx.picked) + ') ' + ctx.options[ctx.picked] : 'no answer'),
      'THE CORRECT ANSWER: ' + String.fromCharCode(65 + ctx.answer) + ') ' + ctx.options[ctx.answer],
      'THE STANDARD EXPLANATION: ' + ctx.why,
      'TOPIC: ' + ctx.topic,
      '',
      'How to help:',
      '- Start by explaining why his answer is wrong and why the correct one is right. Address the specific misunderstanding his choice reveals, rather than restating the explanation above.',
      '- Teach the underlying idea so he can answer a differently worded question on the same topic, not just this one.',
      '- Give him a memory hook where one genuinely helps. Do not force one.',
      '- Keep it short — a few short paragraphs at most. He is mid-quiz.',
      '- Answer follow-up questions directly. If he goes off on a related tangent within the qualification, follow him.',
      '- Be accurate about the specification. Paper 1 covers content areas 1-4 (problem solving, introduction to programming, emerging issues, legislation and regulatory requirements); Paper 2 covers areas 5-8 (business context, data, digital environments, security). Each paper is 2h15 and 90 marks. The Employer Set Project is 14h30 and 100 marks across Tasks 1, 2, 3, 4a and 4b. The programming language is Python 3.10+.',
      '- If you are not sure whether something is on the specification, say so rather than inventing it.',
      '- Do not be sycophantic. Do not open by praising the question. Just teach.'
    ].join('\n');
  }

  /* One call to the Messages API. Returns the assistant's text.
     Thinking is on by default on this model and counts towards max_tokens, so
     max_tokens is set well above the expected answer length. Effort is low —
     this is explanation, not deep reasoning, and it keeps cost and latency
     down. temperature/top_p are not accepted on this model. */
  function ask(ctx, history, onDone, onError) {
    var key = getKey();
    if (!key) { onError('No API key saved.'); return; }

    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 8000,
        output_config: { effort: 'low' },
        system: systemFor(ctx),
        messages: history
      })
    }).then(function (res) {
      return res.json().then(function (data) { return { status: res.status, data: data }; });
    }).then(function (r) {
      if (r.status !== 200) {
        onError(describeError(r.status, r.data));
        return;
      }
      /* A refusal is a successful HTTP 200 with an empty or partial content
         array — check it before reading content. */
      if (r.data.stop_reason === 'refusal') {
        onError('The model declined to answer that one. Try rephrasing, or ask your tutor instead.');
        return;
      }
      var text = (r.data.content || [])
        .filter(function (b) { return b.type === 'text'; })
        .map(function (b) { return b.text; })
        .join('\n')
        .trim();
      if (!text) {
        onError(r.data.stop_reason === 'max_tokens'
          ? 'The reply was cut off before any text came back. Try a shorter question.'
          : 'Empty reply from the API.');
        return;
      }
      onDone(text);
    }).catch(function (err) {
      onError('Could not reach the API (' + (err && err.message ? err.message : 'network error') +
        '). Check your connection.');
    });
  }

  function describeError(status, data) {
    var msg = data && data.error && data.error.message ? data.error.message : '';
    if (status === 401) return 'That API key was rejected. Check it and paste it again.';
    if (status === 403) return 'That key does not have permission for this. ' + msg;
    if (status === 400) return 'The request was rejected: ' + (msg || 'bad request');
    if (status === 429) return 'Rate limited or out of credit. Wait a moment and try again.';
    if (status >= 500) return 'Anthropic had a server error (' + status + '). Try again shortly.';
    return 'Error ' + status + '. ' + msg;
  }

  /* The free path: format the question and answer for pasting into the daily
     tutor session, where marking is already set up. */
  function clipboardText(ctx) {
    return 'I got this wrong in my T Level DSD revision quiz and want to understand it.\n\n' +
      'QUESTION: ' + ctx.q + '\n' +
      ctx.options.map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + o; }).join('\n') + '\n\n' +
      'I answered: ' + (ctx.picked >= 0 ? String.fromCharCode(65 + ctx.picked) + ') ' + ctx.options[ctx.picked] : '(no answer)') + '\n' +
      'Correct answer: ' + String.fromCharCode(65 + ctx.answer) + ') ' + ctx.options[ctx.answer] + '\n' +
      'Explanation given: ' + ctx.why + '\n' +
      'Topic: ' + ctx.topic + '\n\n' +
      'Explain why my answer is wrong, teach me the underlying idea, and give me a way to remember it.';
  }

  return {
    getKey: getKey, setKey: setKey, hasKey: hasKey, maskKey: maskKey,
    ask: ask, clipboardText: clipboardText, model: MODEL
  };
})();
