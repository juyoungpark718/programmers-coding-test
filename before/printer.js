function solution(priorities, location) {
  var answer = 0;
  var catchTarget = false;
  var want = priorities.map((el, index) => {
    if (index === location) {
      return { priority: el, target: true };
    } else {
      return { priority: el, target: false };
    }
  });

  while (!catchTarget) {
    if (findHigher(want)) {
      want.push(want.shift());
      console.log(want);
    } else {
      catchTarget = want.shift().target;
      answer++;
    }
  }

  return answer;
}

function findHigher(priorities) {
  for (var i = 1; i < priorities.length; i++) {
    if (priorities[i].priority > priorities[0].priority) {
      return true;
    }
  }
  return false;
}

// solution([1, 1, 9, 1, 1, 1], 0);
