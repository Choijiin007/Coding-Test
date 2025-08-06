const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let result = '';
const num = Number(input[0]);

for(let i = 1; i <=num ; i++){
	result += '*';
  	console.log(result);}