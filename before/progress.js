function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length > 0) {
    var canDeploy = 0;
    progresses = progresses.map((value, index) => {
      return value + speeds[index];
    });
    for (var i = 0; i < progresses.length; i++) {
      if (progresses[i] >= 100 && progresses[0] >= 100) {
        canDeploy++;
        speeds.shift();
      } else {
        break;
      }
    }
    progresses = progresses.slice(canDeploy, progresses.legnth);
    if (canDeploy > 0) {
      answer.push(canDeploy);
    }
  }

  return answer;
}
