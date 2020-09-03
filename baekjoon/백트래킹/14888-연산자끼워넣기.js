const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");
const [PLUS,MINUS,MULTI,DIV] = [0,1,2,3];

const len = +input[0];
const numbers = input[1].split(" ").map(e => +e);
const ops = input[2].split(" ").map(e => +e);
let max = -Infinity;
let min = Infinity;


const operate = (operation,rand1,rand2) => {
    switch(operation){
        case PLUS:
            return rand1+rand2;
        case MINUS:
            return rand1-rand2;
        case MULTI:
            return rand1*rand2;
        case DIV:
            return rand1 < 0 ? -1*Math.floor(Math.abs(rand1)/rand2) : Math.floor(rand1/rand2);
    }
}


const backtracking = (index, number, used=[0,0,0,0]) => {
    if(index === len){
        max = Math.max(max,number);
        min = Math.min(min,number);
        return;
    }
    const rand2 = numbers[index];
    for(let i=0 ; i<4 ; i++){
        if(used[i] === ops[i]){
            continue;
        }
        const temp = [...used];
        temp[i]++;
        const result = operate(i,number,rand2);
        backtracking(++index, result,temp);
        index--;
    }
}

backtracking(1,numbers[0]);
console.log(max ? max : 0);
console.log(min ? min : 0);