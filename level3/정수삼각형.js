function solution(triangle) {
  var answer = 0;
  for (let i = 0; i < triangle.length - 1; i++) {
    triangle[i + 1] = triangle[i + 1].map((e, id) => {
      if (!triangle[i][id - 1]) {
        return e + triangle[i][id];
      }
      if (!triangle[i][id]) {
        return e + triangle[i][id - 1];
      }
      return Math.max(e + triangle[i][id], e + triangle[i][id - 1]);
    });
  }
  let last = triangle.pop();
  last.sort((a, b) => a - b);
  answer = last.pop();
  return answer;
}
