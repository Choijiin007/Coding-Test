const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let number1 = Number(input[0]);
let number2 = input[1].split(" ").map(Number);

let maxNum = number2[0];
let minNum = number2[0];

for (let i = 1; i < number2.length; i++) {
    maxNum = Math.max(maxNum, number2[i]);
    minNum = Math.min(minNum, number2[i]);
}

console.log(minNum, maxNum);