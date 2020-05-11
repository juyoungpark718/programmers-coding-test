function solution(numbers) {
  var answer = "";
  if (numbers.every((e) => e === 0)) return "0";
  numbers.sort(compareString);
  return numbers.join("");
}

function compareString(a, b) {
  a = String(a);
  b = String(b);
  let len = a.length >= b.length ? b.length : a.length;
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) {
      if (i === len - 1) {
        if (a + b >= b + a) return -1;
        else return 1;
      }
      continue;
    }
    if (a[i] > b[i]) return -1;
    if (a[i] < b[i]) return 1;
  }
  if (len === a.length) return -1;
  else return 1;
}
