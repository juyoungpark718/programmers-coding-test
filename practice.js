function solution(gems) {
  var answer = [];
  let kinds = new Set(gems).size;
  if (kinds === gems.length) return [1, gems.length];
  if (kinds === 1) return [1, 1];
  let check = new Map();
  let arr = [];
  let start = 0;

  for (let i = 0; i < gems.length; i++) {
    if (check.size === kinds) break;
    if (check.get(gems[i])) {
      check.get(gems[i]).push(gems[i]);
    } else {
      check.set(gems[i], []);
      check.get(gems[i]).push(gems[i]);
    }
    arr.push(gems[i]);
    start = remove(arr, check, start);
    // console.log(arr,start);
  }
  return answer;
}

function remove(arr, check, start) {
  while (true) {
    let el = arr[0];
    console.log(arr[0]);
    console.log(arr);
    console.log(check.get(el));
    if (check.get(el).length > 1) {
      check.get(el).pop();
      arr.shift();
      ++start;
    } else {
      break;
    }
  }
  return start;
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);
solution(["AA", "AB", "AC", "AA", "AC"]);
solution(["XYZ", "XYZ", "XYZ"]);
solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]);
