function solution(n, costs) {
  costs.sort((a, b) => b[2] - a[2]);
  var answer = 0;
  let group = Array(n)
    .fill(0)
    .map((e, id) => id);

  while ([...new Set(group)].length !== 1) {
    let way = costs.pop();
    if (find(group, way[0]) !== find(group, way[1])) {
      let group1 = find(group, way[0]);
      let group2 = find(group, way[1]);
      group = group.map((e) => {
        if (e === group1) {
          return group2;
        } else {
          return e;
        }
      });
      answer += way[2];
    }
  }
  return answer;
}

function find(group, way) {
  while (group[way] !== way) {
    way = group[way];
  }
  return way;
}
