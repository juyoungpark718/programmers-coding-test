const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(e => +e);
const lines = input.slice(1).map(e => +e);

let left = 1;
let right = Math.max(...lines);
let result = 0;

while(left <= right){
    let count = 0;
    let mid = Math.floor((left+right)/2);
    lines.forEach(e => {
        count+= Math.floor(e/mid);
    })
    if(count < N){
        right = mid - 1;
    }else{
        left = mid + 1;
        result = Math.max(result,mid);
    }
}

console.log(result);