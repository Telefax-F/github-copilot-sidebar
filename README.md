# GitHub Copilot Sidebar

A Firefox extension that opens GitHub Copilot chat in the browser sidebar.

## Installation

1. Download this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" 
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file
6. Click the Copilot icon in Firefox's sidebar

## How it works

GitHub prevents their pages from being embedded in iframes due to security restrictions. This extension works around that by using Firefox's native sidebar to navigate directly to the GitHub Copilot URL instead of trying to embed it.

## Files

- `manifest.json` - Extension configuration
- `sidebar.html` - Redirects to GitHub Copilot
- `icons/` - Extension icons

## Notes

The extension uses minimal permissions and doesn't collect any data. It simply provides a convenient way to access GitHub Copilot without opening new tabs.
