const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(Number);
//0x 배열의 첫 원소로 초기화 
let maxNum = numbers[0];

for(let i=0; i<numbers.length; i++){
  maxNum = Math.max(maxNum,numbers[i]);
}
console.log(maxNum);
//indexOf는 배열메서드라 앞에 배열명을 넣어줘야 함
//1부터 시작...
console.log(numbers.indexOf(maxNum)+1);

