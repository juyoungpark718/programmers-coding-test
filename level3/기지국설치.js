function solution(n, stations, w) {
  var answer = 0;
  const range = w * 2 + 1;
  let index = 0;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i] - w > 0 && stations[i] - w > index) {
      answer += Math.ceil((stations[i] - w - index - 1) / range);
    }
    index = stations[i] + w;
  }
  if (index < n) {
    answer += Math.ceil((n - index) / range);
  }
  return answer;
}
