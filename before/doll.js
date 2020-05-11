function solution(board, moves) {
  var answer = 0;
  var baguni = [];

  moves.map((e) => {
    for (var i = 0; i < board.length; i++) {
      if (board[i][e - 1] !== 0) {
        if (baguni[baguni.length - 1] === board[i][e - 1]) {
          baguni.pop();
          answer += 2;
          board[i][e - 1] = 0;
          break;
        } else {
          baguni.push(board[i][e - 1]);
          board[i][e - 1] = 0;
          break;
        }
      }
    }
  });

  return answer;
}
