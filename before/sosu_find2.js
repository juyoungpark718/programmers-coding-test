function solution(n) {
  var answer = 0;
  var number = new Array(n + 1).fill(0);

  for (var i = 2; i <= n; i++) {
    number[i] = i;
  }

  for (var i = 2; i <= n; i++) {
    if (number[i] === 0) continue;
    for (var j = 2 * i; j <= n; j += i) {
      number[j] = 0;
    }
  }

  //배열에서 0이 아닌 것들의 개수를 세준다.
  //   for (var i = 0; i < number.length; i++) {
  //     if (number[i] !== 0) {
  //       console.log(number[i]);
  //       answer++;
  //     }
  //   }
  number = number.filter((e) => e !== 0);
  answer = number.length;
  return answer;
}

console.log(solution(4));
