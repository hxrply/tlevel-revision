"""Serve this folder over HTTP and open it in a browser.

Opening index.html straight off disk works, but serving it avoids any
file:// restrictions and matches how GitHub Pages will run it.

Windows note: HTTPServer.allow_reuse_address defaults to True, and on Windows
SO_REUSEADDR lets a socket bind a port another process is already using — which
silently serves the wrong app. So reuse is disabled and a free port is chosen.
"""

import http.server
import socketserver
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FIRST_PORT = 8130
ATTEMPTS = 20


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):  # quieter console
        pass


class Server(socketserver.TCPServer):
    allow_reuse_address = False


def main():
    for port in range(FIRST_PORT, FIRST_PORT + ATTEMPTS):
        try:
            with Server(("127.0.0.1", port), Handler) as httpd:
                url = f"http://127.0.0.1:{port}/"
                print(f"Serving {ROOT} at {url}")
                print("Press Ctrl+C to stop.")
                webbrowser.open(url)
                httpd.serve_forever()
            return
        except OSError:
            continue
    print(f"No free port in {FIRST_PORT}-{FIRST_PORT + ATTEMPTS - 1}.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nStopped.")
