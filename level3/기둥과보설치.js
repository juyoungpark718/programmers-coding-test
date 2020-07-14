function solution(n, build_frame) {
  var answer = [];
  let pillar = [];
  let beam = [];

  for (let i = 0; i <= n + 1; i++) {
    pillar.push(Array(n + 2).fill(0));
    beam.push(Array(n + 2).fill(0));
  }

  while (build_frame.length) {
    let [x, y, a, b] = build_frame.shift();
    x++;
    y++;

    if (a === 0) {
      // 기둥 일 때,
      if (b === 1) {
        // 설치
        if (checkP(pillar, beam, [x, y, a, b])) {
          pillar[y][x] = 1;
        }
      } else {
        // 삭제
        let flag = true;
        pillar[y][x] = 0;
        if (pillar[y + 1][x] === 1 && !checkP(pillar, beam, [x, y + 1, a, b])) {
          flag = false;
        } else if (beam[y + 1][x] && !checkB(pillar, beam, [x, y + 1, a, b])) {
          flag = false;
        } else if (
          beam[y + 1][x - 1] &&
          !checkB(pillar, beam, [x - 1, y + 1, a, b])
        ) {
          flag = false;
        }
        if (!flag) pillar[y][x] = 1;
      }
    } else {
      // 보 일 때,
      if (b === 1) {
        // 설치
        if (checkB(pillar, beam, [x, y, a, b])) {
          beam[y][x] = 1;
        }
      } else {
        // 삭제
        let flag = true;
        beam[y][x] = 0;
        if (pillar[y][x + 1] === 1 && !checkP(pillar, beam, [x + 1, y, a, b])) {
          flag = false;
        } else if (pillar[y][x] === 1 && !checkP(pillar, beam, [x, y, a, b])) {
          flag = false;
        } else if (
          beam[y][x + 1] === 1 &&
          !checkB(pillar, beam, [x + 1, y, a, b])
        ) {
          flag = false;
        } else if (
          beam[y][x - 1] === 1 &&
          !checkB(pillar, beam, [x - 1, y, a, b])
        ) {
          flag = false;
        }
        if (!flag) beam[y][x] = 1;
      }
    }
  }

  for (let i = 1; i < n + 2; i++) {
    for (let j = 1; j < n + 2; j++) {
      if (pillar[i][j] === 1) {
        answer.push([j - 1, i - 1, 0]);
      }
      if (beam[i][j] === 1) {
        answer.push([j - 1, i - 1, 1]);
      }
    }
  }

  answer.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] < b[1]) {
        return -1;
      } else {
        return a[2] - b[2];
      }
    }
  });
  return answer;
}

function checkP(pillar, beam, frame) {
  let [x, y, a, b] = frame;
  if (y === 1) return true;
  if (beam[y][x - 1] === 1) return true;
  if (pillar[y - 1][x] === 1) return true;
  if (beam[y][x] === 1) return true;
  return false;
}

function checkB(pillar, beam, frame) {
  let [x, y, a, b] = frame;
  if (pillar[y - 1][x] === 1) return true; // 왼쪽이 기둥.
  if (pillar[y - 1][x + 1] === 1) return true; // 오른쪽이 기둥.
  if (beam[y][x - 1] === 1 && beam[y][x + 1] === 1) return true; // 양쪽이 보
  return false;
}
