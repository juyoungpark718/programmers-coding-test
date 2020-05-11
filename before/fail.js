function solution(N, stages) {
  var answer = [];
  let stageFail = [];
  let pass = stages.length;
  for (let i = 1; i <= N; i++) {
    stages = stages.filter((e) => e !== i);
    console.log(stages);
    stageFail.push({ stage: i, fail: (pass - stages.length) / pass });
    pass = stages.length;
  }

  stageFail.sort((a, b) => {
    if (a.fail > b.fail) {
      return -1;
    } else if (a.fail < b.fail) {
      return 1;
    }
  });
  answer = stageFail.map((e) => e.stage);
  console.log(answer);
  return answer;
}

/*
각 스테이지를 확인해야함.
N만큼 포문.
stages만큼 포문.
실패율 answer에 푸쉬.
asnwer 정렬.
*/
solution(5, [2, 1, 2, 4, 2, 4, 3, 3]);
//[3, 4, 2, 1, 5]
