function solution(A, B) {
  var answer = 0;
  let left = 0;
  let right = B.length - 1;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[left]) {
      ++answer;
      ++left;
    }
  }
  return answer;
}
