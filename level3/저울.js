function solution(weight) {
  var answer = 0;
  weight.sort((a, b) => b - a);
  answer += weight.pop();
  while (weight.length !== 0) {
    if (answer + 1 < weight[weight.length - 1]) break;
    else answer += weight.pop();
  }
  return answer + 1;
}

/*
1 1 2 3 6 7
*/
