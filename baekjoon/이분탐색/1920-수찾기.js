const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const su = +input[0];
const suArr = input[1].split(" ").map(e => +e);
const targetArr = input[3].split(" ").map(e => +e);

suArr.sort((a,b) => a-b);

let result = [];
targetArr.forEach((target) => {
  let left = 0;
  let right = su-1; 
  while(left <= right){
    let mid = parseInt((left+right)/2);
    if(target < suArr[mid]){
      right = mid - 1;
    }else if(target > suArr[mid]){
      left = mid + 1;
    }else{
      console.log(1);
      return;
    }
  }
  console.log(0);
})