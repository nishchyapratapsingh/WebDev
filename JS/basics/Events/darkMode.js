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
    isDarkMode = false;
  } else {
    isDarkMode = true;
    darkMode();
  }
});

//we could also create darkmode and lightmode classes in css and then add them to the classList of body in event listeners
