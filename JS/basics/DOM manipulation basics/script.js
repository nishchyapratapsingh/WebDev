let givenText = document.querySelector("#incompleteText");
givenText.innerText = givenText.innerText + " completed using JavaScript";

//Create three boxes with common class name box, access them and add unique texts to all of them
let boxList = document.querySelectorAll(".box");

boxList[0].innerText += "\nThis is box1"; 
boxList[1].innerText += "\nThis is box2"; 
boxList[2].innerText += "\nThis is box3"; 