const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");
const testCases = input.slice(1).map(e => +e);

testCases.forEach(testCase => {
    if(testCase === 0){
        console.log("1 0");
        return;
    }
    if(testCase === 1){
        console.log("0 1");
        return;
    }
    const count = Array.from(Array(testCase+1), () => [0,0]);
    count[0][0] = 1;
    count[1][1] = 1;
    for(let i=2 ; i<=testCase ; i++){
        count[i][0] = count[i-1][0] + count[i-2][0];
        count[i][1] = count[i-1][1] + count[i-2][1];
    }
    console.log(`${count[testCase][0]} ${count[testCase][1]}`);
})
