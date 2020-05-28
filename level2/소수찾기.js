function solution(numbers) {
  var answer = 0;
  let p = permutation([...numbers], "");
  answer = primeArr(p);
  return answer;
}

function permutation(numbers, total) {
  return numbers.reduce((acc, val, idx) => {
    let newArr = [...numbers];
    newArr.splice(idx, 1);
    acc.push(total + val);
    let result = permutation(newArr, total + val);
    acc.push(...result);
    return acc;
  }, []);
}

function primeArr(arr) {
  let answer = 0;
  arr = [...new Set(arr.map((e) => Number(e)))].filter(
    (e) => e !== 1 && e !== 0
  );
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) answer++;
  }
  return answer;
}

function checkPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
