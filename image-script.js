document.getElementById("uploadBtn").addEventListener("click", extractEquation);
document.getElementById("switchToTextMode").addEventListener("click", function () {
    window.location.href = "index.html";
});

const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("imageInput");

// 🎯 Handle Drag & Drop Events
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");

    if (event.dataTransfer.files.length > 0) {
        fileInput.files = event.dataTransfer.files;
        extractEquation(); // Auto-process the dropped file
    }
});

// 🖱 Click to Open File Selector
dropZone.addEventListener("click", () => {
    fileInput.click();
});

// 📷 Extract Equation from Image (OCR)
function extractEquation() {
    const file = fileInput.files[0];
    if (!file) {
        alert("Please upload or drag an image first!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const imageUrl = event.target.result;

        Tesseract.recognize(
            imageUrl,
            "eng",
            { logger: (m) => console.log(m) } // Log progress
        ).then(({ data: { text } }) => {
            document.getElementById("extractedText").style.display = "block";
            document.getElementById("extractedText").innerHTML = `<strong>Extracted Equation:</strong> <br> ${text}`;
            
            formatExtractedEquation(text);
        }).catch((error) => {
            console.error("OCR Error:", error);
            alert("Error extracting text. Try using a clearer image.");
        });
    };
    reader.readAsDataURL(file);
}

// 🔢 Format Extracted Text into LaTeX
function formatExtractedEquation(text) {
    const outputDiv = document.getElementById("formattedText");
    let formattedText = text.replace(/\n/g, " ").trim();
    formattedText = `<div class="math-output">\\[${formattedText}\\]</div>`;

    outputDiv.innerHTML = formattedText;
    MathJax.typesetPromise([outputDiv]).catch(err => console.error("MathJax error:", err));
}
