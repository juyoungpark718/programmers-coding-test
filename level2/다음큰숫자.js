function solution(n) {
  var answer = 0;
  let binaryCount = findDup(n.toString(2));
  for (let i = n + 1; i < 10000000; i++) {
    let tempCount = findDup(i.toString(2));
    if (tempCount === binaryCount) {
      answer = i;
      break;
    }
  }

  return answer;
}

function findDup(number) {
  let count = number.match(/1/g).length;
  return count;
}
