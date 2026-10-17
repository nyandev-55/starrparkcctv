Starr Park CCTV Web Application (Archived Edition)

An archival and restoration project for the interactive Starr Park CCTV Security Camera System from Brawl Stars (Supercell). This repository hosts the static frontend interface, reconstructs broken assets, and emulates missing player modules for local hosting.

📸 Preview

📌 Features & Fixes

Fully Restored Interface: Fixes the blank white screen issues caused by direct file:// protocol access and missing asset paths.

Custom Player Emulator: Contains a custom-written JavaScript player module (player-4a897b6d.js) that handles media binding and video playback without requiring live CDN streaming.

Directory Structure Optimization: Re-architected asset references for local HTTP server execution (Python http.server, VS Code Live Server, or Nginx).

🛠️ Project Structure

.
├── assets/                  # Images, background videos (.webm, .mp4), and UI sound effects
│   ├── seek-video-dab3875d.mp4
│   ├── ambient-4-e38c4a0a.webm
│   └── ...
├── fonts/                   # Retro CRT fonts (.ttf)
│   ├── vt-100-regular.ttf
│   └── vt-220-medium.ttf
├── browserCheck.js          # Browser capability verification script
├── index.html               # Primary HTML entry point
├── index-29e9eceb.css       # Main UI stylesheet
├── index-a2a84d7c.js        # Core application bundled logic
└── player-4a897b6d.js       # Custom video player & camera feed emulator


🚀 Getting Started

Due to CORS (Cross-Origin Resource Sharing) rules and ES6 Module support, this project must be served via a local HTTP web server and cannot be opened directly via double-clicking index.html.

Prerequisites

Python 3.x OR Visual Studio Code with the Live Server extension.

Running Locally

Option 1: Python HTTP Server (Recommended)

Clone or download this repository.

Open a terminal in the project root directory.

Run the following command:

python -m http.server 8000


Open your browser and navigate to:

http://localhost:8000


Option 2: VS Code Live Server

Open the project folder in Visual Studio Code.

Click "Go Live" at the bottom-right status bar.

Your browser will automatically open the site.

⚠️ Troubleshooting

Black CCTV Screens: Ensure your video asset file (seek-video-dab3875d.mp4) exists inside the assets/ directory.

404 Module Errors in Console: If player-4a897b6d.js fails to load, make sure File Name Extensions are enabled in Windows Explorer so the file isn't accidentally named player-4a897b6d.js.txt.

Cache Clearing: If updates do not reflect in your browser, press Ctrl + F5 (or Cmd + Shift + R on macOS) to perform a hard refresh.

📜 Disclaimer & Credits

This is a non-commercial, fan-made archival project created for educational and preservation purposes. All artwork, audio, video assets, and intellectual property belong to Supercell (Brawl Stars).
