function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  var cycleTable = Array(101).fill(-1);
  for (var i = 0; i < costs.length; i++) {
    if (!cycleTable.includes(costs[i][0]))
      cycleTable[costs[i][0]] = costs[i][0];
    if (!cycleTable.includes(costs[i][1]))
      cycleTable[costs[i][1]] = costs[i][1];
  }
  var count = 0;
  for (var i = 0; i < costs.length; i++) {
    var current = costs[i];
    var one = current[0];
    var the_other = current[1];
    var cost = current[2];
    if (cycleTable[the_other] !== cycleTable[one]) {
      cycleTable = changeCycleTableNumber(cycleTable, one, the_other);
      console.log(cycleTable);
      answer += cost;
      count++;
    }
    if (count === n - 1) break;
  }
  return answer;
}

function changeCycleTableNumber(cycleTable, one, the_other) {
  for (var i = 0; i < cycleTable.length; i++) {
    if (cycleTable[i] === cycleTable[the_other])
      cycleTable[i] = cycleTable[one];
  }
  return cycleTable;
}

solution(6, [
  [0, 1, 5],
  [0, 3, 2],
  [0, 4, 3],
  [1, 4, 1],
  [3, 4, 10],
  [1, 2, 2],
  [2, 5, 3],
  [4, 5, 4],
]);
