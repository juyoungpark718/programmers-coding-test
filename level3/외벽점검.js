// 배열을 직선으로 펼친다.
// dist의 배열에서 선택할 친구의 수를 순열.

function solution(n, weak, dist) {
  var answer = 0;
  for (let pick = 1; pick <= dist.length; pick++) {
    let result = permutation(dist, pick, []);
    let temp_weak = [...weak];
    for (let i = 0; i < temp_weak.length; i++) {
      for (let j = 0; j < result.length; j++) {
        let temp_weak2 = [...temp_weak];
        for (let k = 0; k < result[j].length; k++) {
          let range = Number(temp_weak2[0]) + Number(result[j][k]);
          temp_weak2 = temp_weak2.filter((e) => e > range);
        }
        if (temp_weak2.length === 0) return result[0].length;
      }
      let tmp = Number(temp_weak.shift());
      tmp += n;
      temp_weak.push(tmp);
    }
  }
  return -1;
}

function permutation(dist, pick, total) {
  if (total.length === pick) return [total];
  return dist.reduce((acc, val, id) => {
    let newDist = [...dist];
    newDist.splice(id, 1);
    total.push(val);
    let result = permutation(newDist, pick, [...total]);
    total.pop();
    acc.push(...result);
    return acc;
  }, []);
}

/*
테스트 1 〉	통과 (1.84ms, 37.4MB)
테스트 2 〉	통과 (1.92ms, 37.3MB)
테스트 3 〉	통과 (3090.39ms, 84.6MB)
테스트 4 〉	통과 (2751.05ms, 84.2MB)
테스트 5 〉	통과 (20.76ms, 41.9MB)
테스트 6 〉	통과 (70.17ms, 41.7MB)
테스트 7 〉	통과 (1.88ms, 37.4MB)
테스트 8 〉	통과 (1.99ms, 37.3MB)
테스트 9 〉	통과 (2.27ms, 37.6MB)
테스트 10 〉	통과 (455.75ms, 71MB)
테스트 11 〉	통과 (1194.97ms, 77.2MB)
테스트 12 〉	통과 (397.92ms, 55.2MB)
테스트 13 〉	통과 (4900.84ms, 86.4MB)
테스트 14 〉	통과 (1400.48ms, 78.5MB)
테스트 15 〉	통과 (385.25ms, 55.2MB)
테스트 16 〉	통과 (7.38ms, 39MB)
테스트 17 〉	통과 (97.57ms, 50.8MB)
테스트 18 〉	통과 (35.81ms, 42.1MB)
테스트 19 〉	통과 (3.13ms, 37.8MB)
테스트 20 〉	통과 (19.31ms, 40.5MB)
테스트 21 〉	통과 (2.77ms, 37.7MB)
테스트 22 〉	통과 (3.47ms, 38.4MB)
테스트 23 〉	통과 (5.15ms, 39.1MB)
테스트 24 〉	통과 (5.17ms, 38.8MB)
테스트 25 〉	통과 (135.49ms, 53.1MB)
*/
