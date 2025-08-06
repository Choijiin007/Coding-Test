const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");


const a = input[0];
let result = "";

for(let i = 1; i <= a; i++){
	 let data = input[i].split(' ').map(Number);
  	 result += `Case #${i}: ${data[0]+data[1]}\n`;
}

console.log(result);