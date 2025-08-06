const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result += (a + b) + '\n';
}

console.log(result);
  