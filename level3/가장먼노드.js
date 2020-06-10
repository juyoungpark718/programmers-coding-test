function solution(n, edge) {
  var answer = 0;
  let check = [1];
  while (true) {
    let newCheck = [];
    edge = edge.filter((e) => {
      if (check.includes(e[0]) && check.includes(e[1])) return false;
      if (check.includes(e[0])) {
        newCheck.push(e[1]);
        return false;
      }
      if (check.includes(e[1])) {
        newCheck.push(e[0]);
        return false;
      }
      return true;
    });
    if (edge.length === 0 && newCheck.length === 0) {
      answer = check.length;
      break;
    }
    check = [...new Set(newCheck)];
  }

  return answer;
}
