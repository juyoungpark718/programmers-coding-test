const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const len = +input[0];
const cases = [];

for(let i=1 ; cases.length !== len ; i+=2){
    const [N, order] = input[i].split(" ").map(e => +e);
    const documents = input[i+1].split(" ").map((e,id) => { return {id, imp: +e} });
    cases.push([N,order,documents]);
}

cases.forEach(test => {
    const [N, order, documents] = test;
    let count = 1;
    while(documents.length){
        const { id, imp } = documents[0];
        if(documents.some(e => e.imp > imp)){
            const shift = documents.shift();
            documents.push(shift);
        }else{
            const {id, imp} = documents.shift();
            if(order === id){
                console.log(count);
                return ;
            }
            count++;
        }
    }
})