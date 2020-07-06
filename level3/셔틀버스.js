let start = 540;
function solution(n, t, m, timetable) {
  var answer = "";
  let table = time(timetable);
  table.sort((a, b) => a - b);
  while (n) {
    let canRide = table.filter((e) => e <= start);
    if (n === 1) {
      if (canRide) {
        if (canRide.length < m) return stringTime(start);
        else {
          return stringTime(canRide[m - 1] - 1);
        }
      } else {
        return stringTime(start);
      }
    }
    if (canRide.length > m) {
      for (let i = 0; i < m; i++) {
        table.shift();
      }
    } else {
      table = table.filter((e) => e > start);
    }
    n--;
    start += t;
  }
  return answer;
}

function time(timeTable) {
  return timeTable.map((e) => {
    let [time, minute] = e.split(":");
    let total = Number(time * 60) + Number(minute);
    return total === 1440 ? 1439 : total;
  });
}

function stringTime(total) {
  let time = Math.floor(total / 60);
  let minute = total % 60;
  time = time < 10 ? "0" + String(time) : String(time);
  minute = minute < 10 ? "0" + String(minute) : String(minute);
  return time + ":" + minute;
}
