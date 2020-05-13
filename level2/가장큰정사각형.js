function solution(board) {
  var answer = 1234;
  let maxPoint = 0;

  if (board.length < 2 || board[0].length < 2) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === 1) {
          maxPoint = 1;
        }
      }
    }
  } else {
    for (let i = 1; i < board.length; i++) {
      for (let j = 1; j < board[i].length; j++) {
        if (board[i][j] === 1) {
          let minPoint = Math.min(
            board[i][j - 1],
            board[i - 1][j],
            board[i - 1][j - 1]
          );
          board[i][j] = minPoint + 1;
          if (board[i][j] > maxPoint) {
            maxPoint = board[i][j];
          }
        }
      }
    }
  }

  answer = maxPoint * maxPoint;

  return answer;
}
