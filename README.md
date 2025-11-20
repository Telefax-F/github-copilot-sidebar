# GitHub Copilot Sidebar for Firefox

A simple Firefox extension that provides **one-click access** to GitHub Copilot chat directly in your browser's sidebar. No more switching between tabs or losing context while coding!

## ✨ Features

- 🚀 **One-Click Access**: Click the sidebar icon and instantly access GitHub Copilot
- 🎯 **Ultra Lightweight**: Minimal permissions, only 16KB total size
- 🔄 **Auto-Redirect**: Automatically navigates to GitHub Copilot when opened
- 🎨 **Clean Interface**: No unnecessary buttons or complex UI
- 🔒 **Privacy-Focused**: No data collection, minimal permissions

## 📥 Installation

### Option 1: Temporary Installation (Recommended for Testing)

1. **Download or Clone** this repository
2. **Open Firefox** and navigate to `about:debugging`
3. **Click "This Firefox"** on the left sidebar
4. **Click "Load Temporary Add-on"**
5. **Select the `manifest.json`** file from this project folder
6. **Look for the Copilot icon** in Firefox's sidebar area
7. **Click it** - you'll be taken directly to GitHub Copilot chat!

### Option 2: Permanent Installation (Advanced)

1. Follow steps 1-5 above for temporary installation
2. For permanent installation, the extension would need to be published to Mozilla Add-ons (AMO)

## 🎯 How It Works

This extension solves the common problem of GitHub's X-Frame-Options restrictions that prevent iframe embedding. Instead of trying to embed GitHub Copilot, it uses Firefox's native sidebar functionality to **navigate directly** to the GitHub Copilot URL.

**The Magic:**
- Uses `sidebar_action` in manifest.json for native Firefox sidebar integration
- Uses meta refresh redirect (`<meta http-equiv="refresh">`) for reliable navigation
- Bypasses iframe restrictions completely by navigating the sidebar window itself

## 🛠️ Technical Details

### Key Files
```
github-copilot-sidebar/
├── manifest.json           # Extension configuration with sidebar_action
├── sidebar.html           # Auto-redirect page with loading animation
├── icons/                 # Extension icons
│   ├── copilot-icon-48.svg
│   ├── copilot-icon-96.svg
│   └── README.md
└── README.md
```

### Lessons Learned - iframe Workarounds

**❌ What Doesn't Work:**
- Direct iframe embedding: `<iframe src="https://github.com/copilot">` 
- Content script injection with iframes
- Trying to modify X-Frame-Options headers
- Using GitHub's marketing pages instead of chat interface

**✅ What Works:**
- **Native sidebar navigation**: Using `window.location.href` or meta refresh
- **Meta refresh redirect**: `<meta http-equiv="refresh" content="0; url=https://github.com/copilot">`
- **Direct URL navigation**: Let the sidebar become a mini-browser window
- **Fallback methods**: Multiple redirect techniques for reliability

## 🚀 Publishing to Mozilla Add-ons (Future)

This extension is ready for AMO submission with:
- ✅ Minimal permissions (`storage` only)
- ✅ Clean, lightweight codebase
- ✅ Privacy-friendly (no data collection)
- ✅ Clear functionality and documentation
- ✅ Proper icon assets and metadata

## 🎥 Demo

**Before:** Switch between tabs, lose context, interrupt workflow  
**After:** One click → GitHub Copilot sidebar → continue coding seamlessly

## 🤝 Contributing

This project could help other developers facing similar iframe restrictions! Feel free to:

- **Report Issues**: Found a bug or have suggestions?
- **Share Solutions**: Discovered other iframe workarounds?
- **Improve Documentation**: Help others understand these techniques
- **Submit PRs**: Code improvements always welcome

## 📝 License

MIT License - Feel free to use, modify, and distribute!

---

**Built with ❤️ for developers who want seamless AI assistance while coding.**
