function solution(m, n, board) {
  var answer = 0;
  let newBoard = [];
  for (let j = 0; j < n; j++) {
    let arr = [];
    for (let i = m - 1; i >= 0; i--) {
      arr.push(board[i][j]);
    }
    newBoard.push(arr);
  }
  answer = find(m, n, newBoard);
  return answer;
}

function find(m, n, board) {
  let isEnd = false;
  let total = 0;
  let i = 0;
  do {
    let check = total;
    for (let i = 1; i < n; i++) {
      for (let j = m - 2; j >= 0; j--) {
        let target = board[i][j].toLowerCase();
        if (
          target === board[i - 1][j + 1].toLowerCase() &&
          target === board[i - 1][j].toLowerCase() &&
          target === board[i][j + 1].toLowerCase()
        ) {
          board[i - 1][j] = board[i - 1][j].toLowerCase();
          board[i - 1][j + 1] = board[i - 1][j + 1].toLowerCase();
          board[i][j] = board[i][j].toLowerCase();
          board[i][j + 1] = board[i - 1][j + 1].toLowerCase();
        }
      }
    }
    board = board.map((e) => {
      let count = 0;
      e = e.filter((el) => {
        if (/[a-z]/.test(el)) {
          count++;
          return false;
        } else {
          return true;
        }
      });
      for (let i = 0; i < count; i++) {
        e.push("");
      }
      total += count;
      return e;
    });
    if (check === total) {
      isEnd = true;
    }
  } while (!isEnd);
  return total;
}
