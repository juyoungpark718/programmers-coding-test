function solution(arrangement) {
  var answer = 0;
  var ironBar = [];

  for (var i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      if (arrangement[i + 1] === ")") {
        answer += ironBar.length;
      } else {
        ironBar.push(0);
      }
    } else {
      if (arrangement[i - 1] !== "(") {
        ironBar.pop();
        answer += 1;
      }
    }
  }
  return answer;
}
