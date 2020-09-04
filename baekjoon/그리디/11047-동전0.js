const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

let [N, total] = input[0].split(" ").map(e => +e);
const coins = input.slice(1).map(e => +e).reverse();
let count = 0;

while(total){
    for(const coin of coins){
        if(coin <= total){
            total -= coin;
            count++;
            break;
        }
    }
}

console.log(count);