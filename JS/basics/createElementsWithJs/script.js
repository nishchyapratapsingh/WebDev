//create button element
let newButton = document.createElement("button");

//add style and text
newButton.innerText = "Click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "yellow";
newButton.style.height = "50px";
newButton.style.margin = "10px";
newButton.style.width = "100px";

//add button to document flow
document.querySelector("body").append(newButton);
