function solution(land) {
  var answer = 0;
  let before = 0;

  for (let i = 0; i < land.length; i++) {
    let max = 0;
    if (i === 0) {
      max = Math.max(...land[i]);
      before = land[i].findIndex((e) => e === max);
      answer += max;
      continue;
    }
    let newArr = [...land[i]];
    newArr.splice(before, 1);
    max = Math.max(...newArr);
    before = land[i].findIndex((e) => e === max);
    answer += max;
  }

  return answer;
}
