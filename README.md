# Helpdesk Location Search Extension

A browser extension that provides quick access to search for helpdesk locations, rooms, and departments. The extension works with Firefox, Chrome, and Edge browsers.

## Features

- Instant search as you type
- Search by room numbers, departments, or locations
- Results update in real-time
- Dark/Light theme support
- Automatic focus on search box when opened

## Installation Instructions

### Firefox

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on"
4. Navigate to the extension directory and select `manifest.json`

Note: The extension will remain installed until you close Firefox. This is normal for temporary add-ons during development.

### Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Navigate to the extension directory and select it

Note: The extension will remain installed until you manually remove it or disable developer mode.

### Edge

1. Open Edge and navigate to `edge://extensions`
2. Enable "Developer mode" using the toggle on the left
3. Click "Load unpacked"
4. Navigate to the extension directory and select it
5. When prompted for manifest version, the extension will automatically use manifest.v3.json

Note: Like Chrome, the extension will remain installed until you manually remove it or disable developer mode.

## Usage

1. Click the Helpdesk extension icon in your browser toolbar
2. Start typing to search (the search box is automatically focused)
3. Results will update as you type
4. Use the clear button (×) to reset your search
5. Toggle between light and dark themes using the sun/moon icon

## Data Coverage

The database contains location data for:
- Walsgrave
- Rugby St Cross
- FM Building
- CSB
- EPR 'Portkabins'
- MHU

## Search Tips

- Search for room numbers, departments, or partial terms
- Examples:
  - Search "security" or "renal"
  - Use partial searches like "aez"
  - Search "porters" to find all porter-related locations at St Cross and Walsgrave