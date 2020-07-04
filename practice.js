function solution(board) {
  var answer = 0;
  let arr = Array.from(Array(board.length), () => Array(board.length).fill(0));
  board.forEach((e, id) => {
    e.forEach((el, index) => {
      if (el === 1) arr[id][index] = Infinity;
    });
  });
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (arr[i][j] === Infinity) continue;
      if (arr[i - 1][j] && arr[i][j - 1])
        arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + 600;
      else if (arr[i][j - 1]) arr[i][j] = arr[i][j - 1] + 100;
      else if (arr[i - 1][j]) arr[i][j] = arr[i - 1][j] + 100;
    }
  }
  console.log(arr);
  return answer;
}
solution([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
/*
0  100 200
100  700 800
200  800 900
*/
