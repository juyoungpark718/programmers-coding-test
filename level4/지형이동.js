//상하좌우
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];

const makeTwoArr = (length,value) => Array.from(Array(length), () => Array(length).fill(value));

function solution(land, height) {
    let answer = 0;
    const len = land.length;
    const visited = makeTwoArr(len, -1);
    const area = [];
    let areaNumber = 0;
    
    for(let y=0; y<len ; y++){
        
        for(let x=0 ; x<len ; x++){
            const arrX = [];
            if(visited[y][x] !== -1) continue;
            visited[y][x] = areaNumber;
            const queue = [[x,y]];
            arrX.push([x,y]);
            while(queue.length){
                const [startX,startY] = queue.pop();
                for(let i=0 ; i<4 ; i++){
                    const nx = dx[i] + startX;
                    const ny = dy[i] + startY;
                    if(nx<0 || ny<0 || nx>=len || ny>=len) continue;
                    const diff = Math.abs(land[ny][nx] - land[startY][startX]);
                    if(visited[ny][nx] !== -1 || diff > height) continue;
                    visited[ny][nx] = areaNumber;   
                    queue.push([nx,ny]);
                    arrX.push([nx,ny]);
                }
            }
            areaNumber++;
            area.push(arrX);
        }
    }
    
    const edgeObj = {};
    for(let i=0 ; i<area.length ; i++){
        edgeObj[i] = {};
        for(let j=0 ; j<area[i].length ; j++){
            const [x,y] = area[i][j];
            for(let k=0; k<4 ; k++){
                const nx = dx[k] + x;
                const ny = dy[k] + y;
                if(nx<0 || ny<0 || nx>= len || ny>= len || visited[ny][nx] === i) continue;
                const cost = Math.abs(land[ny][nx] - land[y][x]);
                const start = i < visited[ny][nx] ? i : visited[ny][nx];
                const end = i > visited[ny][nx] ? i : visited[ny][nx];
                if(!edgeObj[start][end]) edgeObj[start][end] = cost;
                else edgeObj[start][end] = Math.min(edgeObj[start][end],cost);
            }
        }
    }
    
    const edges = [];
    for(let start in edgeObj){
        for(let end in edgeObj[start]){
            edges.push([+start,+end,edgeObj[start][end]]);
        }
    }
    edges.sort((a,b)=> a[2]-b[2]);
    
    const visited2 = Array.from(Array(areaNumber+1) , (val,idx) => idx);

    const find = (n) => {
        if(visited2[n] === n) return n;
        return find(visited2[n]);
    }   
    
    const union = (a,b) =>{
        visited2[find(a)] = visited2[find(b)];
    }
    
    edges.forEach((edge) => {
        const [start,end,cost] = edge;
        if(find(start) === find(end)) return;
        answer += cost;
        union(start,end);
    })
    
    return answer;
}