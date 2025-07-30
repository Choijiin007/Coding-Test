const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, M] = input[0].split(" ").map(Number);
const C = Number(input[1]);

const totalMinutes = H * 60 + M + C;

const endH = Math.floor(totalMinutes / 60) % 24;
const endM = totalMinutes % 60;

console.log(endH, endM);