# **ChatGPT Math Formatter 📄 ➝ 🧮**

A simple web tool that **formats ChatGPT-generated text**, properly renders **LaTeX math equations**, and now supports **image-to-LaTeX conversion** with **OCR processing**.

🔗 **Live Site:** [ChatGPT Math Formatter](https://singhagamgit.github.io/ChatGPT-Math-Formatter/)

---

## **🚀 Features**
✔️ Formats text from ChatGPT output  
✔️ Supports LaTeX math rendering using MathJax  
✔️ Provides a clean and user-friendly interface  
✔️ "Copy to Clipboard" button for quick copying  
✔️ **Image-to-LaTeX conversion using OCR (Tesseract.js)**  
✔️ **Drag & Drop image upload support**  
✔️ **Switch between text input and image mode**  
✔️ **Dark mode support** 🌙  

---

## **📁 Project Structure**
/ChatGPT-Math-Formatter ├── index.html # Text-to-LaTeX page ├── image-to-latex.html # Image-to-LaTeX OCR page ├── style.css # CSS styling (dark mode, layout, drag & drop) ├── script.js # JavaScript for text formatting & MathJax rendering ├── image-script.js # JavaScript for OCR processing and LaTeX formatting ├── README.md # Project documentation

---

## **🛠️ How to Use**
### **📄 Convert Text to LaTeX**
1. **Paste** your ChatGPT-generated text in the input box.
2. Click **"Format Text"** to properly structure and render math equations.
3. The **Formatted Output** section will show the formatted content.
4. Click **"Copy to Clipboard"** to copy the text.

### **📸 Convert Image to LaTeX**
1. Click **"Switch to Image Mode"** to go to the OCR page.
2. **Drag & Drop** an image (or use the file uploader).
3. Click **"Extract Equation"** to process the image.
4. Extracted math will be **formatted in LaTeX**.
5. Copy and use it in your documents or code.

---

## **🎨 Tech Stack**
- **HTML** (Structure)  
- **CSS** (Styling & Layout)  
- **JavaScript** (Formatting, OCR, and MathJax support)  
- **MathJax** (For LaTeX equation rendering)  
- **Tesseract.js** (OCR for extracting text from images)  

---

## **🖥️ Live Preview**
🌐 **Deploy this project on GitHub Pages, Vercel, or Netlify** to see it in action!

---

## **🔧 Customization**
Modify the `placeholder` value in **index.html** to change the default text:
```html
<textarea id="textInput" placeholder="Paste your text with math here..."></textarea>

🤝 Contributing

Contributions are welcome! To contribute:

Fork this repo.
Create a new branch (feature-name).
Commit changes with clear messages.
Open a Pull Request and describe your changes.
