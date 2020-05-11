function solution(number, k) {
  var answer = "";
  answer = bigger(number, k);
  return answer;
}

function bigger(number, k) {
  let biggest = "";
  let len = number.length - k;
  for (let i = 0; i < number.length - k; ) {
    if (biggest.length === len) break;
    if (number[i] === "9") {
      biggest += number[i];
      i++;
      continue;
    }
    let el = findBig(number, i);
    if (el.target !== null) {
      if (el.index - i <= k) {
        k = k - (el.index - i);
        i = el.index;
      } else {
        biggest += number[i];
        i++;
      }
    } else {
      biggest += number[i];
      i++;
    }
  }
  return biggest;
}

function findBig(number, idx) {
  for (let i = idx + 1; i < number.length; i++) {
    if (number[i] > number[idx]) return { target: number[i], index: i };
  }
  return { target: null, index: -1 };
}
