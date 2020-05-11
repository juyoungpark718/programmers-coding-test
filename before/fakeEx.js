function solution(answers) {
  var answer = [];
  var answerTemp = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  var supoja1 = [1, 2, 3, 4, 5];
  var supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.map((e, index) => {
    if (e === supoja1[index % supoja1.length]) {
      answerTemp[0][1]++;
    }
    if (e === supoja2[index % supoja2.length]) {
      answerTemp[1][1]++;
    }
    if (e === supoja2[index % supoja3.length]) {
      answerTemp[2][1]++;
    }
  });

  answerTemp.sort((a, b) => b[1] - a[1]);

  if (answerTemp[0][1] === 0) {
    return answer;
  }

  answer.push(answerTemp[0][0]);
  for (var i = 1; i < 3; i++) {
    if (answerTemp[0][1] == answerTemp[i][1]) {
      answer.push(answerTemp[i][0]);
    }
  }

  return answer;
}
