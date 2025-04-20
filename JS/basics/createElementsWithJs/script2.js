//create a p element
let para = document.createElement("p");

//give it a class and add text
para.setAttribute("class", "text");
para.innerHTML = "<i>Truth prevails</i>";

//styling
para.style.fontSize = "2rem";
para.style.color = "purple";
para.style.padding = "10px";
para.style.backgroundColor = "yellow";

//add to document
document.querySelector("button").after(para);
