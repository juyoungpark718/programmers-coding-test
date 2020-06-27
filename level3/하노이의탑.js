function solution(n) {
  var answer = [];
  hanoi(answer, n, 1, 2, 3);
  return answer;
}

function hanoi(answer, num, from, by, to) {
  if (num === 1) {
    answer.push([from, to]);
  } else {
    hanoi(answer, num - 1, from, to, by);
    answer.push([from, to]);
    hanoi(answer, num - 1, by, from, to);
  }
}
