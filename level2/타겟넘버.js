function solution(numbers, target) {
  var answer = 0;
  answer = dfs(numbers, target, 0, answer);
  return answer;
}

function dfs(numbers, num, target) {
  let newArr = [...numbers];
  let temp = newArr.pop();
  let answer = 0;
  if (numbers.length === 0) {
    if (target === num) {
      answer++;
    }
    return answer;
  } else {
    answer = dfs(newArr, num + temp, target) + dfs(newArr, num - temp, target);
  }

  return answer;
}
