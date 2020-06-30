function solution(stones, k) {
  let min = 1;
  let max = 200000000;
  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    if (search(k, mid, stones)) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}

function search(k, mid, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] - mid <= 0) count++;
    else count = 0;
    if (count >= k) return true;
  }
  return false;
}
