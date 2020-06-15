function solution(operations) {
  var answer = [];
  let queue = [];
  operations.forEach((e) => {
    let [command, num] = e.split(" ");
    num = Number(num);
    switch (command) {
      case "I":
        queue.push(num);
        queue.sort((a, b) => a - b);
        break;
      case "D":
        num > 0 ? queue.pop() : queue.shift();
        break;
      default:
        new Error("error");
    }
  });
  if (queue.length === 0) answer = [0, 0];
  else answer = [queue[queue.length - 1], queue[0]];
  return answer;
}
