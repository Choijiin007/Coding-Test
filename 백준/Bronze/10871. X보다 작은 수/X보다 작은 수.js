const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const num = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(x => Number(x));

const newArr = arr.filter(item => item < num);

console.log(newArr.join(' '));