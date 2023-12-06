// Selecting texts
const targetText = document.querySelector("h1");
const propertyText = document.querySelector("p");

// Selecting inputs
const colorInput = document.querySelector('input[id="color"]');
const fontSizeInput = document.querySelector('input[type="range"]');
const fontFamilySelection = document.querySelector('select[name="fontFamily"]');

// Selecting buttons
const colorBtn = document.querySelector(".colorBtn");
const underlineBtn = document.querySelector(".underline");
const italicBtn = document.querySelector(".italic");
const boldBtn = document.querySelector(".bold");
const getPropertyBtn = document.querySelector(".getProperty");

colorBtn.addEventListener("click", () => {
  targetText.style.color = colorInput.value;
});

fontSizeInput.addEventListener("input", () => {
  //   console.log(fontSizeInput.value);
  targetText.style.fontSize = fontSizeInput.value + "px";
});

underlineBtn.addEventListener("click", () => {
  if (targetText.getAttribute("isUnderline") === "false") {
    targetText.style.textDecoration = "underline";
    targetText.setAttribute("isUnderline", "true");
  } else {
    targetText.style.textDecoration = "none";
    targetText.setAttribute("isUnderline", "false");
  }
});

boldBtn.addEventListener("click", () => {
  if (targetText.getAttribute("isBold") === "false") {
    targetText.style.fontWeight = "bold";
    targetText.setAttribute("isBold", "true");
  } else {
    targetText.style.fontWeight = "normal";
    targetText.setAttribute("isBold", "false");
  }
});

italicBtn.addEventListener("click", () => {
  if (targetText.getAttribute("isItalic") === "false") {
    targetText.style.fontStyle = "italic";
    targetText.setAttribute("isItalic", "true");
  } else {
    targetText.style.fontStyle = "normal";
    targetText.setAttribute("isItalic", "false");
  }
});

fontFamilySelection.addEventListener("change", () => {
  targetText.style.fontFamily = fontFamilySelection.value;
});

getPropertyBtn.addEventListener("click", () => {
  const color = targetText.style.color;
  const fontSize = targetText.style.fontSize;
  const fontFamily = targetText.style.fontFamily;

  propertyText.innerHTML = `Color is <b>${color}</b> Size is <b>${fontSize}</b> family is <b>${fontFamily}</b>`;
});
