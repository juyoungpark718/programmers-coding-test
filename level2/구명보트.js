function solution(people, limit) {
  var answer = 0;
  let left = 0;
  let right = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);
  while (left + right !== people.length) {
    if (i === j) {
      answer++;
      break;
    }
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
      right++;
      left++;
      answer++;
    } else {
      j--;
      right++;
      answer++;
    }
  }

  return answer;
}
