function solution(heights) {
  var answer = [];
  while (heights.length > 0) {
    var temp = heights.pop();
    for (var i = heights.length; i > 0; i--) {
      if (heights[i - 1] > temp) {
        answer.unshift(i);
        break;
      }
      if (i === 1) {
        answer.unshift(i - 1);
      }
    }
    if (heights.length === 0) {
      answer.unshift(0);
    }
  }

  return answer;
}
