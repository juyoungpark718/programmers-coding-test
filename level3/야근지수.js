function solution(n, works) {
  var answer = 0;
  if (works.reduce((acc, val) => acc + val) <= n) return 0;
  works.sort((a, b) => b - a);
  while (n !== 0) {
    let max = works[0];
    let idx = 0;
    for (let i = 1; i < works.length; i++) {
      if (max === works[i]) idx = i;
      else break;
    }
    for (let j = 0; j <= idx; j++) {
      if (n === 0) break;
      works[j] -= 1;
      n--;
    }
  }
  answer = works.reduce((acc, val) => acc + Math.pow(val, 2), 0);
  return answer;
}
