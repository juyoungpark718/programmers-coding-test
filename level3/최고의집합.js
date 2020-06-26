function solution(n, s) {
  if (n > s) return [-1];
  var answer = [];
  let div = Math.floor(s / n);
  answer = Array(n).fill(div);

  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i] += 1;
  }

  return answer;
}
