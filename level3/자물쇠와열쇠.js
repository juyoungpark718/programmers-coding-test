function solution(key, lock) {
  var answer = false;
  let n = lock.length + (key.length - 1) * 2;
  let back = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      if (lock[i][j] === 1) {
        back[i + key.length - 1][j + key.length - 1] = 1;
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    //회전
    key = rotate(key);
    for (let j = 0; j < n - (key.length - 1); j++) {
      // back
      for (let k = 0; k < n - (key.length - 1); k++) {
        // back
        if (isUnLock(key, back, j, k, lock)) {
          return true;
        }
      }
    }
  }

  return answer;
}

function isUnLock(key, back, j, k, lock) {
  let tmp = [...back.map((e) => [...e])];

  for (let x = 0; x < key.length; x++) {
    for (let y = 0; y < key.length; y++) {
      tmp[j + x][k + y] += key[x][y];
    }
  }

  for (let x = key.length - 1; x < key.length - 1 + lock.length; x++) {
    for (let y = key.length - 1; y < key.length - 1 + lock.length; y++) {
      if (tmp[x][y] !== 1) return false;
    }
  }
  return true;
}

function rotate(arr) {
  let len = arr.length;
  let tmp = Array.from(Array(len), () => Array(len));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      tmp[i][j] = arr[len - 1 - j][i];
    }
  }
  return tmp;
}
