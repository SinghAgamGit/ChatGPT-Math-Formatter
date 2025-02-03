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