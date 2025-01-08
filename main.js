const div = document.querySelector(".circle-button");
const parentdiv = document.querySelector(".circle-container");
const text = document.getElementById("text");
let isLightTheme = true;
div.addEventListener("click", () => {
  let color = isLightTheme ? "white" : "black";
  let iconColor = !isLightTheme ? "white" : "black";
  text.style.color = iconColor;
  div.classList.toggle("rotate");
  parentdiv.style.backgroundColor = color;
  isLightTheme = !isLightTheme;
});
