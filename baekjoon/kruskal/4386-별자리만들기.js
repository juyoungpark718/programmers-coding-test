const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const getDistance = (startLocation, endLocation) => {
  const [startX, startY] = startLocation;
  const [endX, endY] = endLocation;
  return Math.sqrt(Math.pow(startY-endY,2)+Math.pow(startX-endX,2));
}
const float = parseFloat;

const starCount = +input[0];
const visited = Array.from(Array(starCount), (v,i)=> i);
const checked = Array(starCount).fill(false);
const star = {};
input.slice(1).forEach((startLocation,idx) => {
  const [x,y] = startLocation.split(" ");
  star[idx] = [float(x),float(y)];
});

const find = (star) => {
  if(visited[star] === star) return star;
  return find(visited[star]);
}

const edge = [];

const findEdge = (start) => {
  checked[start] = true;
  for(const key in star){
    if(key === start) continue;
    if(checked[key]) continue;
    const cost = getDistance(star[start],star[key]);
    edge.push([start,key,cost]);
  }
}

for(const key in star){
  findEdge(key);
}
edge.sort((a,b) => a[2] - b[2]);

let answer = 0;

for(let i=0 ; i<edge.length ; i++){
  const [start,end,cost] = edge[i];
  if(find(start) === find(end)) continue;
  visited[find(end)] = find(start);
  answer += cost;
}

console.log(answer);