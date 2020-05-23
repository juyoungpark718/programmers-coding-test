function solution(n, a, b) {
  while (true) {
    n = n / 2;
    if (n < a && n < b) {
      a = a - n;
      b = b - n;
    } else if (n >= a && n >= b) {
      continue;
    } else {
      let count = powTwo(n);
      return count + 1;
    }
  }
  return 1;
}

function powTwo(n) {
  let count = 0;
  while (n !== 1) {
    n = n / 2;
    count++;
  }
  return count;
}
