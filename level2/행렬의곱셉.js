function solution(arr1, arr2) {
  var answer = [];
  for (let j = 0; j < arr2[0].length; j++) {
    for (let i = 0; i < arr1.length; i++) {
      let total = 0;
      arr1[i].forEach((e, idx) => {
        total += e * arr2[idx][j];
      });
      if (answer[i]) answer[i].push(total);
      else answer.push([total]);
    }
  }

  return answer;
}
