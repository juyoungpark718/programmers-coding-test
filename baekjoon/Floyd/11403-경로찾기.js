const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const N = +input[0];
const adj = input.slice(1, N+1).map(e => e.split(" ").map(el => +el));

for(let i=0 ; i<adj.length ; i++){
  for(let j=0 ; j<adj.length ; j++){
    for(let k=0 ; k<adj.length ; k++){
      if(adj[j][i] && adj[i][k]){
        adj[j][k] = 1;
      }
    }
  }
}

adj.forEach(e => log(e.join(" ")));