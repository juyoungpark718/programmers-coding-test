function solution(n, edge) {
  var answer = 0;
  var relationship = new Array(n);
  for (var j = 0; j < relationship.length; j++) {
    relationship[j] = [];
  }

  for (var i = 0; i < edge.length; i++) {
    var first = edge[i][0];
    var second = edge[i][1];
    relationship[first - 1].push(first, second);
    relationship[second - 1].push(second, first);
  }

  for (var k = 0; k < relationship.length; k++) {
    relationship[k] = [...new Set(relationship[k])].sort((a, b) => a - b);
  }

  var q = [];
  var result = [];
  //   while (true) {
  q.push(...relationship[0]);
  for (var i = 1; i < q.length; i++) {
    var pointer = q[i];
    var temp = relationship[pointer - 1].filter((e) => !q.includes(e));
    if (temp.length !== 0) {
      q.push(...temp);
    } else {
      result.push(pointer);
    }
  }
  //   }

  answer = result.length;

  return answer;
}
let a = solution(7, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
  [1, 7],
]);

console.log(a);
