let box = document.querySelector(".box");

box.addEventListener("click", () => {
  alert("Box clicked");
});

const listener2 = () => {
  alert("Box right clicked");
};
box.addEventListener("contextmenu", listener2);

// remove event listener
box.removeEventListener("contextmenu", listener2);
