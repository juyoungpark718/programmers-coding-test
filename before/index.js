function solution(user_id, banned_id) {
  var answer = 0;
  let can = [];

  for (let i = 0; i < banned_id.length; i++) {
    can.push(findBan(user_id, banned_id[i]));
  }
  let b = combination(can, [], can.length);
  b = b.map((e) => e.sort());
  let tempset = [];
  for (let i = 0; i < b.length; i++) {
    let temp = b[i].join("");
    tempset.push(temp);
  }
  answer = [...new Set(tempset)].length;

  return answer;
}
function combination(can, temp, dep) {
  return can.reduce(
    (johab, el, index) => {
      let newArr = can.slice(index + 1, can.length);
      for (let i = 0; i < el.length; i++) {
        if (temp.includes(el[i])) continue;
        temp.push(el[i]);
        let result = combination(newArr, temp, dep);
        console.log("result:", result, " johab:", johab, " temp:", temp);
        if (result.length === 0 && temp.length === dep) {
          johab.push([...temp]);
          temp.pop();
        } else {
          johab.push(...result);
          temp.pop();
        }
      }
      return johab;
    },
    [],
    0
  );
}

function findBan(user_id, ban) {
  user_id = user_id.filter((e) => {
    if (e.length === ban.length) {
      return e;
    }
  });
  for (let i = 0; i < ban.length; i++) {
    if (ban[i] === "*") continue;
    user_id = user_id.filter((e) => {
      if (ban[i] === e[i]) {
        return true;
      }
    });
  }
  return user_id;
}

solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "*rodo", "******", "******"]
);
