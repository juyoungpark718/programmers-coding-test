function solution(w, h) {
  var answer = 1;
  answer = w * h - (w + h - gcd(w, h));
  return answer;
}

function gcd(n, m) {
  if (n > m) {
    if (n % m === 0) {
      return m;
    } else {
      return gcd(n % m, m);
    }
  } else {
    if (m % n === 0) {
      return n;
    } else {
      return gcd(m % n, n);
    }
  }
}
