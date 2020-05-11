function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => a - b);
  for (let i = citations.length; i >= 0; i--) {
    let count = 0;
    for (let j = citations.length - 1; j >= 0; j--) {
      if (citations[j] >= i) count++;
      else break;
    }
    if (count >= i) {
      answer = i;
      break;
    }
  }
  return answer;
}
