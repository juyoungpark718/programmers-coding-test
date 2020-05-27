function solution(record) {
  var answer = [];
  answer = checkCommand(record);
  return answer;
}

function splitRecord(record) {
  const command = record.split(" ");
  return command;
}

function checkCommand(record) {
  let user = {};
  let result = [];
  record.forEach((e) => {
    let command = splitRecord(e);
    if (command[0] === "Enter") {
      user[command[1]] = command[2];
      result.push([command[0], command[1]]);
    } else if (command[0] === "Leave") {
      result.push([command[0], command[1]]);
    } else {
      user[command[1]] = command[2];
    }
  });
  result = result.map((e) => {
    if (e[0] === "Enter") {
      return user[e[1]] + "님이 들어왔습니다.";
    } else {
      return user[e[1]] + "님이 나갔습니다.";
    }
  });
  return result;
}
