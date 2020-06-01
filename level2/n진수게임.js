function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  let idx = p - 1;
  let j = 0;
  while (answer.length != t) {
    let num = j;
    if (!str[idx]) {
      j++;
      str += num.toString(n);
    }
    if (str[idx]) {
      answer += str[idx].toUpperCase();
      idx += m;
    }
  }
  return answer;
}
