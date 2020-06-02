const de = new Date("2016-09-14 23:59:57").getTime();
function solution(lines) {
  var answer = 0;
  let hashs = makeHashArr(lines);
  // console.log(hashs)
  let starts = hashs.map((e) => e.start);
  let ends = hashs.map((e) => e.end);
  let startMax = 0;
  let endMax = 0;
  ends.forEach((end) => {
    let count = 0;
    hashs.forEach((e) => {
      if (checkTime(e, end)) {
        count++;
      }
    });
    endMax = Math.max(endMax, count);
  });
  starts.forEach((start) => {
    let count = 0;
    hashs.forEach((e) => {
      if (checkTime(e, start)) {
        count++;
      }
    });
    startMax = Math.max(startMax, count);
  });
  // console.log(startMax,endMax);
  answer = Math.max(startMax, endMax);
  return answer;
}

function makeHash(line) {
  const splited = line.split(" ");
  const date = new Date(`${splited[0]} ${splited[1]}`).getTime() - de;
  const execute = parseFloat(splited[2]) * 1000;

  return { start: date + 1 - execute, end: date };
}

function makeHashArr(lines) {
  return lines.map((e) => makeHash(e));
}

function checkTime(hash, time) {
  if (hash.start < time && hash.end < time) {
    return false;
  } else if (hash.start > time + 999 && hash.end > time + 999) {
    return false;
  }
  return true;
}

/*
임의 시간부터 1초

*/
