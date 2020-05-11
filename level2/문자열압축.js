function solution(s) {
  var answer = 0;
  const cutted = [];
  for (let i = 1; i <= s.length; i++) {
    cutted.push(cutStr(i, s));
  }
  answer = cutted.sort((a, b) => a - b);
  return answer[0];
}

function cutStr(i, s) {
  let cuttingStr = [];
  let temp = s;
  let str = "";
  for (let j = 0; j < Math.ceil(s.length / i); j++) {
    if (temp.length / i > 1) {
      cuttingStr.push(temp.slice(0, i));
      temp = temp.slice(i, temp.length);
    } else {
      cuttingStr.push(temp);
    }
  }

  while (cuttingStr.length !== 0) {
    let count = 1;
    let current = cuttingStr.shift();
    while (cuttingStr.length !== 0) {
      if (current == cuttingStr[0]) {
        cuttingStr.shift();
        count++;
      } else {
        break;
      }
    }
    if (count === 1) {
      str = str + current;
    } else {
      str = str + String(count) + current;
    }
  }
  return str.length;
}
