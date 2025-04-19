//filter marks that are > 90
marks = [87, 56, 96, 91, 90, 85];

let ninetyPlusMarks = marks.filter( (val) => val > 90);

console.log(ninetyPlusMarks);

//reduce method to find sum and product of array

const n = prompt("Enter a number");
let arr = [];

for (let i=1; i<=n; i++) {
    arr.push(i);
}

const arraySum = arr.reduce( (res, curr) => {
    return res + curr;
}, 0);

const arrayProduct = arr.reduce( (res, curr) => {
    return res * curr;
}, 1);

console.log(arraySum);
console.log(arrayProduct);