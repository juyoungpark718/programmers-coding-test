function solution(tickets) {
  var answer = [];
  tickets.sort();
  tickets = tickets.map((e, id) => {
    return [id, e[0], e[1]];
  });
  dfs("ICN", tickets, [], answer);
  answer = answer.shift();
  answer.unshift("ICN");
  return answer;
}

function dfs(start, tickets, result, answer) {
  let can = [];
  tickets.forEach((e) => {
    if (e[1] === start) {
      can.push(e);
    }
  });
  // console.log(can);
  if (can.length === 0 && tickets.length === 0) answer.push(result);
  if (can.length === 0 && tickets.length !== 0) return;
  can.forEach((e, id) => {
    let others = tickets.filter((el) => {
      if (el[1] === e[1] && el[2] === e[2] && el[0] === e[0]) return false;
      else return true;
    });
    result.push(e[2]);
    let newResult = [...result];
    result.pop();
    dfs(e[2], others, newResult, answer);
  });
}
