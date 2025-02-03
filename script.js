document.getElementById("formatBtn").addEventListener("click", formatText);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

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

  // If no math delimiters ($ or $$) are found, wrap the entire input in display math delimiters.
  if (!input.includes("$")) {
    formattedText = `<div class="math-output">\\[${input}\\]</div>`;
  } else {
    // Replace display math ($$...$$) first, then inline math ($...$)
    formattedText = input
      .replace(/\$\$(.*?)\$\$/gs, '<div class="math-output">\\[$1\\]</div>')
      .replace(/\$(.*?)\$/gs, '<span class="math-output">\\($1\\)</span>');
  }
  outputDiv.innerHTML = formattedText;
  
  // Force MathJax to reprocess the new content
  MathJax.typesetPromise([outputDiv]).then(() => {
    copyBtn.style.display = "inline-block"; // Show the copy button
  }).catch(err => {
    console.error("MathJax rendering error:", err);
  });
}
function copyToClipboard() {
  const tempElement = document.createElement("textarea");
  tempElement.value = document.getElementById("formattedText").innerText;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);
  alert("Formatted text copied to clipboard!");
}
const textInput = document.getElementById('textInput');

const phrases = [
    "Paste your text with math here..."
];

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
// Dark mode toggle function
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.id = "darkModeToggle";
    document.body.prepend(darkModeToggle);

    const formatBtn = document.getElementById("formatBtn"); // Get Format Button

    function updateTheme() {
        const isDarkMode = document.body.classList.contains("dark-mode");

        if (isDarkMode) {
            darkModeToggle.innerHTML = "☀️"; // Sun icon for Light Mode
            darkModeToggle.style.color = "#fff"; // White icon in dark mode

            // Force format button to yellow in dark mode
            formatBtn.style.backgroundColor = "#ffcc00";
            formatBtn.style.color = "black";
        } else {
            darkModeToggle.innerHTML = "🌙"; // Moon icon for Dark Mode
            darkModeToggle.style.color = "#000"; // Black icon in light mode

            // Force format button to blue in light mode
            formatBtn.style.backgroundColor = "#007BFF";
            formatBtn.style.color = "white";
        }
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        updateTheme();
    });

    // Load stored theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateTheme(); // Ensure correct colors on page load
});
