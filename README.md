# GitHub Copilot Sidebar for Firefox

A Firefox extension that integrates GitHub Copilot into the browser's sidebar for quick and easy access while browsing.

## Features

- 🚀 **Quick Access**: Access GitHub Copilot directly from Firefox's sidebar
- 🎯 **Lightweight**: Minimal permissions and resource usage
- 📱 **Responsive**: Scales properly to fit the entire sidebar
- 🔒 **Secure**: No unnecessary data collection or external calls

## Installation

### Temporary Installation (Development)

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" on the left sidebar
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from this project folder
5. The extension should now appear in Firefox's sidebar

### Using the Extension

1. Look for the GitHub Copilot icon in Firefox's sidebar
2. Click on it to open the GitHub Copilot interface
3. Use Copilot directly in the sidebar while browsing

## Project Structure

```
github-copilot-sidebar/
├── manifest.json     # Firefox extension configuration
├── sidebar.html      # Sidebar interface with GitHub Copilot iframe
├── icons/            # Extension icons (48px and 96px)
│   ├── copilot-icon-48.svg
│   ├── copilot-icon-96.svg
│   └── README.md     # Icon conversion instructions
└── README.md         # This file
```

## Development

### Requirements
- Firefox (any recent version)
- Basic knowledge of web technologies (HTML, CSS, JavaScript)

### Getting Started
1. Clone this repository
2. Convert the SVG icons to PNG format (see `icons/README.md`)
3. Load the extension in Firefox using the temporary installation method above
4. Make changes and reload the extension to test

### Future Enhancements
- GitHub OAuth authentication integration
- Quick code snippets feature
- GitHub PR/issue management tools
- Custom keyboard shortcuts

## Contributing

Feel free to contribute by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## License

This project is open source and available under the MIT License.
