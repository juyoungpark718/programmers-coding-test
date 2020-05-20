function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  arr = arr.map((e) => {
    if (typeof e[0] === "string") {
      let temp = e.slice(1, e.length).toLowerCase();
      let temp2 = e.slice(0, 1).toUpperCase();
      return temp2 + temp;
    } else {
      return e;
    }
  });
  answer = arr.join(" ");
  return answer;
}
