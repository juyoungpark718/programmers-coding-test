const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// const input = fs.readFileSync("./stdin").toString().trim().split(" ");
let N = +input[0];
const [r,c] = input.slice(1).map(e => +e);
let y = parseInt(Math.pow(2,N) / 2);
let x = y;
let order = 0;

while(N-- > 0){
    const section = parseInt(Math.pow(2,N) / 2);
    const skip = parseInt(Math.pow(4,N));
    if(r < y && c < x){ // 둘다 작은 경우 다른 섹션.
        y -= section;
        x -= section;
    }else if(r < y && c >= x){ // y축은 포함 x
        x += section;
        y -= section;
        order += skip;
    }else if(r >= y && c < x){ // y축은 크니까 2개를 포함시켜야함.
        x -= section;
        y += section;
        order += skip*2;
    }else{
        x += section;
        y += section;
        order += skip*3;      
    }
}

console.log(order);