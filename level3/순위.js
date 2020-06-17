function solution(n, results) {
  var answer = 0;
  let wl = Array(n).fill(0);
  wl = wl.map((e) => [[], []]);
  results.forEach((e) => {
    wl[e[0] - 1][1].push(e[1]);
    wl[e[1] - 1][0].push(e[0]);
  });
  for (let i = 0; i < n; i++) {
    wl.forEach((e) => {
      e[0] = [
        ...new Set(
          e[0].reduce((acc, val) => {
            acc.push(...wl[val - 1][0]);
            acc.push(val);
            return acc;
          }, [])
        ),
      ];
      e[1] = [
        ...new Set(
          e[1].reduce((acc, val) => {
            acc.push(...wl[val - 1][1]);
            acc.push(val);
            return acc;
          }, [])
        ),
      ];
      return e;
    });
  }
  wl.forEach((e) => {
    if (e[0].length + e[1].length === n - 1) {
      answer++;
    }
  });
  return answer;
}
