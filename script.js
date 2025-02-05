document.getElementById("formatBtn").addEventListener("click", formatText);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);
document.getElementById("toggleModeBtn").addEventListener("click", switchToImageMode);

function formatText() {
    const input = document.getElementById("textInput").value.trim();
    const outputDiv = document.getElementById("formattedText");
    const copyBtn = document.getElementById("copyBtn");

    if (!input) {
        outputDiv.innerHTML = "<i>No text to format</i>";
        copyBtn.style.display = "none";
        return;
    }

    let formattedText = "";
    
    // Wrap input in LaTeX delimiters if no math delimiters ($ or $$) are found
    if (!input.includes("$")) {
        formattedText = `<div class="math-output">\\[${input}\\]</div>`;
    } else {
        formattedText = input
            .replace(/\$\$(.*?)\$\$/gs, '<div class="math-output">\\[$1\\]</div>')
            .replace(/\$(.*?)\$/gs, '<span class="math-output">\\($1\\)</span>');
    }

    outputDiv.innerHTML = formattedText;

    // Force MathJax to process LaTeX
    MathJax.typesetPromise([outputDiv]).then(() => {
        copyBtn.style.display = "inline-block"; // Show the copy button
    }).catch(err => console.error("MathJax rendering error:", err));
}

// 📋 Copy LaTeX Output to Clipboard
function copyToClipboard() {
    const tempElement = document.createElement("textarea");
    tempElement.value = document.getElementById("formattedText").innerText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    alert("Formatted text copied to clipboard!");
}

// 🔤 Placeholder Typing Animation
const textInput = document.getElementById("textInput");
const phrases = ["Paste your text with math here..."];
let charIndex = 0;

function typeText() {
    if (charIndex < phrases[0].length) {
        textInput.setAttribute("placeholder", phrases[0].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
    }
}

window.onload = () => {
    textInput.setAttribute("placeholder", "");
    setTimeout(typeText, 500);
};

// 🌙 Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.id = "darkModeToggle";
    document.body.prepend(darkModeToggle);
    
    const formatBtn = document.getElementById("formatBtn");

    function updateTheme() {
        const isDarkMode = document.body.classList.contains("dark-mode");

        if (isDarkMode) {
            darkModeToggle.innerHTML = "☀️"; // Sun icon for Light Mode
            formatBtn.style.backgroundColor = "#ffcc00";
            formatBtn.style.color = "black";
        } else {
            darkModeToggle.innerHTML = "🌙"; // Moon icon for Dark Mode
            formatBtn.style.backgroundColor = "#007BFF";
            formatBtn.style.color = "white";
        }
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        updateTheme();
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateTheme();
});

document.addEventListener("DOMContentLoaded", function () {
    const switchBtn = document.getElementById("switchToImageMode");

    if (switchBtn) {
        switchBtn.addEventListener("click", function () {
            window.location.href = "image-to-latex.html";
        });
    } else {
        console.error("Button #switchToImageMode not found!");
    }
});