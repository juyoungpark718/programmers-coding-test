function solution(N, number) {
  var answer = 0;
  answer = abc(N, number, 0, [0]);
  return answer;
}
function abc(N, target, dep, dp) {
  let total = new Set();
  if (dep > 8) {
    return -1;
  }
  dep++;
  if (dep === 1) {
    total.add(N);
    dp.push(total);
    if (total.has(target)) return dep;
  } else {
    for (let i = 1; i < Math.floor(dep / 2) + 1; i++) {
      for (let j = dep - i; j >= dep - i; j--) {
        dp[i].forEach((e) => {
          dp[j].forEach((el) => {
            total.add(e + el);
            total.add(e * el);
            total.add(el - e);
            total.add(e - el);
            if (e !== 0) total.add(Math.floor(el / e));
            if (el !== 0) total.add(Math.floor(e / el));
          });
        });
      }
    }
    total.add(Number(`${N}`.repeat(dep)));
    dp.push(total);
    if (total.has(target)) return dep;
  }
  return abc(N, target, dep, dp);
}
