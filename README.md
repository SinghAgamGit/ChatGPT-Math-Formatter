ChatGPT Math Formatter 📄 ➝ 🧮

A simple web tool that formats ChatGPT-generated text, properly renders LaTeX math equations, and now supports image-to-LaTeX conversion with OCR processing.

🔗 Live Site: 

🚀 Features

✅ Formats text from ChatGPT output
✅ Supports LaTeX math rendering using MathJax
✅ Provides a clean and user-friendly interface
✅ "Copy to Clipboard" button for quick copying
✅ Image-to-LaTeX conversion using OCR (Tesseract.js)
✅ Drag & Drop image upload support
✅ Switch between text input and image mode
✅ Dark mode support 🌙

📁 Project Structure

/ChatGPT-Math-Formatter
  ├── index.html            # Text-to-LaTeX page
  ├── image-to-latex.html   # Image-to-LaTeX OCR page
  ├── style.css             # Styling for the UI (dark mode, layout, drag & drop)
  ├── script.js             # JavaScript for text formatting & MathJax rendering
  ├── image-script.js       # JavaScript for OCR processing and LaTeX formatting
  ├── README.md             # Project documentation
🛠️ How to Use

📄 Convert Text to LaTeX
Paste your ChatGPT-generated text in the input box.
Click "Format Text" to properly structure and render math equations.
The Formatted Output section will show the formatted content.
Click "Copy to Clipboard" to copy the text.
📸 Convert Image to LaTeX
Click "Switch to Image Mode" to go to the OCR page.
Drag & Drop an image (or use the file uploader).
Click "Extract Equation" to process the image.
Extracted math will be formatted in LaTeX.
Copy and use it in your documents or code.
🎨 Tech Stack

HTML (Structure)
CSS (Styling & Layout)
JavaScript (Formatting, OCR, and MathJax support)
MathJax (For LaTeX equation rendering)
Tesseract.js (OCR for extracting text from images)
🖥️ Live Preview

🌐 Deploy this project on GitHub Pages, Vercel, or Netlify to see it in action!

🔧 Customization

Modify the placeholder value in index.html to change the default text:

<textarea id="textInput" placeholder="Paste your text with math here..."></textarea>
Modify style.css to customize colors, fonts, or layout.

🤝 Contributing

Contributions are welcome! To contribute:

Fork this repo.
Create a new branch (feature-name).
Commit changes with clear messages.
Open a Pull Request and describe your changes.