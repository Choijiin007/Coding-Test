const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
//map()은 배열의 모든 요소를 하나씩 순회하면서, 지정한 함수를 적용한 결과로 새로운 배열을 만들어주는 메서드
//const [a, b] = input.map(Number);
const a = Number(input[0]);
const b = Number(input[1]);
if(a > b){
    console.log(">");
}
else if(a < b){
    console.log("<");
}
else {
    console.log("==");
}