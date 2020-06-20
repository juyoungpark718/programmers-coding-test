function solution(s) {
  var answer = 1;

  for (let i = s.length; i > 1; i--) {
    for (let j = 0; i + j <= s.length; j++) {
      let check = true;
      for (let k = 0; k < i / 2; k++) {
        if (s[j + k] !== s[i + j - k - 1]) {
          check = false;
          break;
        }
      }
      if (check) return i;
    }
  }

  return answer;
}
