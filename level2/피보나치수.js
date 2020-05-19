function solution(n) {
  var answer = 0;
  answer = fibonacci2(n).pop() % 1234567;
  return answer;
}

function fibonacci2(n) {
  let arr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    arr.push((arr[i] % 1234567) + (arr[i + 1] % 1234567));
  }
  return arr;
}

function fibonacci(n) {
  if (n < 2) return n;
  let result1 = fibonacci(n - 1) + fibonacci(n - 2);
  return result1;
}
