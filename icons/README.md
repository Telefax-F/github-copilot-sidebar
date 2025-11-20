# README - Icon Conversion

The extension currently uses SVG placeholder icons. To convert them to PNG format for the Firefox extension:

## Option 1: Online Converter
1. Go to https://convertio.co/svg-png/
2. Upload the SVG files
3. Download as PNG files with the same names (just change .svg to .png)

## Option 2: Using VS Code Extension
1. Install "SVG to PNG Converter" extension in VS Code
2. Right-click on SVG files and select "Convert to PNG"

## Option 3: Using PowerShell (if you have ImageMagick installed)
```powershell
magick convert copilot-icon-48.svg copilot-icon-48.png
magick convert copilot-icon-96.svg copilot-icon-96.png
```

After conversion, you can delete the .svg files and keep only the .png files.