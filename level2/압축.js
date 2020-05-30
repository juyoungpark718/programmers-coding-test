const dict = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
function solution(msg) {
  var answer = [];
  let w = "" + msg[0];
  msg = [...msg];
  msg.forEach((e, val) => {
    if (msg[val + 1]) {
      let temp = w + msg[val + 1];
      if (dict.includes(temp)) {
        w += msg[val + 1];
        return;
      } else {
        dict.push(temp);
        answer.push(dict.findIndex((el) => el === w));
        w = msg[val + 1];
      }
    } else {
      answer.push(dict.findIndex((el) => el === w));
    }
  });
  return answer;
}
