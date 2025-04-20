let newButton = document.createElement("button");
newButton.innerHTML = "<b>Double Click</b>";

document.querySelector("body").prepend(newButton);

//Event handling in JS
newButton.ondblclick = () => {
  console.log("The button is clicked!");
  let a = 23;
  a++;
  console.log(a);
};
