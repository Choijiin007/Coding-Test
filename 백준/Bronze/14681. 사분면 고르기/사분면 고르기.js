const fs = require('fs');
//줄바꿈  split('\n')
const input = fs.readFileSync(0).toString().trim().split('\n');
//parseInt가 더 명확
const x = parseInt(input[0]);
const y = parseInt(input[1]);
//기준값을 0으로 적어줘야. 소수점도 반영
if(x>0 && y >0){
console.log(1);    
}
else if (x<0 && y>0){
    console.log(2);
}
else if(x<0 && y<0){
    console.log(3);
}
else {
    console.log(4);
}