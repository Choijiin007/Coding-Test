const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

    //정수의 개수
let N= Number(input[0]);
//정수가 공백으로 구분, 하나씩 숫자형으로 바꿔주려면 map()사용
let b = input[1].split(" ").map(Number);
//찾으려는 정수 v
let v = Number(input[2]);
let count = 0;
//index는 0부터, N 미만으로
for(let i=0; i<N; i++){
    if(b[i] === v){
        count++;
        
    }
}console.log(count);


