function solution(arr) {
  var answer = 0;
  let isFind = false;
  let i = 1;
  // arr.sort((a,b) => a-b)
  let max = arr.splice(arr.length - 1, 1);
  while (!isFind) {
    isFind = arr.every((e) => (max * i) % e === 0);
    i++;
  }
  answer = max * (i - 1);
  return answer;
}
