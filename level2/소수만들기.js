function solution(nums) {
  var answer = 0;
  // answer = permutation(nums,0,1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        if (checkPrime(total)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// 조합을 이용해 푸는 방식
function permutation(nums, total, dep) {
  return nums.reduce((acc, val, idx) => {
    let newArr = [...nums];
    if (idx === 0) newArr.splice(idx, 1);
    else newArr.splice(0, idx + 1);
    total += val;
    dep++;
    if (dep === 3) {
      if (checkPrime(total)) return ++acc;
      else return acc;
    }
    let result = permutation(nums, total, dep);
    acc += result;
    total -= val;
    return acc;
  }, 0);
}

function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
