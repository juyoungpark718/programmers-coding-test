function solution(n) {
  var answer = "";
  let nara = [1, 2, 4];
  answer = [...deep(n, "")];
  answer = answer.map((e) => {
    if (e === "0") return "4";
    if (e === "1") return "1";
    if (e === "2") return "2";
  });
  answer = answer.join("");
  return answer;
}

function deep(num, str) {
  if (num / 3 <= 1) {
    let na = String(num % 3);
    return na + str;
  } else {
    if (num % 3 === 0) {
      num = num - 3;
    }
    let na = num % 3;
    str = na + str;
    str = deep(Math.floor(num / 3), str);
  }

  return str;
}
