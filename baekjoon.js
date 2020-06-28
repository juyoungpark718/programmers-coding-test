// var fs = require("fs");
// // var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = fs.readFileSync("./stdin").toString().split("\n");
// input = input.map((e) => e.split(" "));

function b9663() {
  var fs = require("fs");
  // var input = fs.readFileSync("/dev/stdin").toString().split("\n");
  var input = fs.readFileSync("./stdin").toString().split("\n");
  var n = parseInt(input[0]);
  var array = new Array(n).fill(0);
  var queenArray = [];
  for (var i = 0; i < n; i++) {
    queenArray.push([...array]);
  }
  queenArray[0][0] = 1;
  for (let i = 0; i < n; i++) {
    console.log(queenArray[i][0]);
  }
  // console.log("queenArray: ",queenArray)
  // 초기 상태의 queenArray
  // var emptyArray = isEmpty(queenArray);
  // console.log("array.length: ", array.length);
  // var ans = [];
  // n_queen(0, n, emptyArray, queenArray, ans);
  // console.log("ans:", ans);
}

function n_queen(index, n, emptyArray, queenArray, array) {
  var count = howManyQueens(queenArray);
  console.log("count:", count);
  if (count === n) {
    // for(var i=0; i<n; i++){
    //     for(var j=0; j<n; j++){
    //         array.push(queenArray[i][j])
    //     }
    // }
    array.push(queenArray);
    console.log("array:", array);
    return array;
  }
  var x = emptyArray[index][0];
  var y = emptyArray[index][1];
  console.log("x:", x, "y:", y);

  if (isPromising(x, y, queenArray)) {
    console.log("isPromising? ", isPromising(x, y, queenArray));
    console.log("here x:", x, "y", y);
    queenArray[x][y] = 1;
    console.log("queenArray:", queenArray);
    // queenArray[x][y] = 0
  }
  n_queen(index + 1, n, emptyArray, queenArray, array);
}

function isPromising(x, y, queenArray) {
  for (var i = 0; i < queenArray.length; i++) {
    if (queenArray[x][i] === 1) {
      console.log("행: ", queenArray[x][i], "x", x, "i", i);
      return false;
    }
  }

  for (var i = 0; i < queenArray.length; i++) {
    if (queenArray[i][y] === 1) {
      console.log("열: ", queenArray[i][y], "y", y, "i", i);
      return false;
    }
  }
  // 대각선
  var dx = [-1, -1, 1, 1];
  var dy = [-1, 1, -1, 1];
  for (var i = 0; i < 4; i++) {
    if (
      dx[i] + x >= 0 &&
      dx[i] + x < queenArray.length &&
      dy[i] + y >= 0 &&
      dy[i] + y < queenArray.length
    ) {
      console.log("dx[i] + x :", dx[i] + x, "dy[i] + y:", dy[i] + y);
      if (queenArray[dx[i] + x][dy[i] + y] === 1) {
        return false;
      }
    }
  }
  return true;
}

function initQueen(queenArray) {
  for (var i = 0; i < queenArray.length; i++) {
    for (var j = 0; j < queenArray[i].length; j++) {
      queenArray[i][j] = 0;
    }
  }
  return queenArray;
}

function isEmpty(queenArray) {
  var empty = [];
  for (var i = 0; i < queenArray.length; i++) {
    for (var j = 0; j < queenArray[i].length; j++) {
      if (queenArray[i][j] === 0) empty.push([i, j]);
    }
  }
  return empty;
}

function howManyQueens(queenArray) {
  var count = 0;
  for (var i = 0; i < queenArray.length; i++) {
    for (var j = 0; j < queenArray[i].length; j++) {
      if (queenArray[i][j] === 1) count++;
    }
  }
  return count;
}

b9663();
