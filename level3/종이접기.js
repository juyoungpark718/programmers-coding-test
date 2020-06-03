function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let temp = [...answer];
    answer.push(0);
    for (let i = temp.length - 1; i >= 0; i--) {
      if (temp[i] === 1) answer.push(0);
      else answer.push(1);
    }
  }
  return answer;
}
