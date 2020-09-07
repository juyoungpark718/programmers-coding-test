const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const len = +input[0];
const datas = input.slice(1);

datas.forEach(data => {
    const arr = [...data];
    const stack = [];
    arr.forEach(el => {
        if(!stack.length){
            stack.push(el);
            return ;
        }
        if(stack[stack.length - 1] === "(" && el === ")"){
            stack.pop();
        }else{
            stack.push(el);
        }
    });
    if(stack.length === 0) console.log("YES");
    else console.log("NO");
});