function solution(budgets, M) {
  budgets.sort((a, b) => b - a);
  var answer = 0;
  let len = budgets.length;
  let total = budgets.reduce((acc, val) => acc + val);
  if (total <= M) return budgets[0];

  while (budgets.length !== 0) {
    if (M < 0) break;
    answer = Math.max(answer, Math.floor(M / budgets.length));
    M -= budgets.pop();
  }
  return answer;
}
