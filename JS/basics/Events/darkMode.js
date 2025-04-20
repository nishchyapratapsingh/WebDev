let isDarkMode = false;

let themeBtn = document.querySelector("#themeBtn");

const darkMode = () => {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
};
const lightMode = () => {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
};

themeBtn.addEventListener("click", () => {
  if (isDarkMode) {
    lightMode();
    isDarkMode=false;
  } else {
    isDarkMode=true;
    darkMode();
  }
});
