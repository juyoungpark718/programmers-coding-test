function solution(nums) {
  var answer = 0;
  // let result = permutation(nums,[],nums.length/2)
  let maxLength = nums.length / 2;
  let numsSet = [...new Set(nums)];

  if (maxLength <= numsSet.length) {
    answer = maxLength;
  } else {
    answer = numsSet.length;
  }

  return answer;
}

// function permutation(nums, selected, maxlength) {
//   return nums.reduce((acc, poketmon, idx) => {
//     let newArr = [...nums];
//     newArr.splice(0, idx + 1);
//     selected.push(poketmon);
//     if (selected.length === maxlength) {
//       acc.push([...selected]);
//       selected.pop();
//       return acc;
//     }
//     let result = permutation(newArr, selected, maxlength);
//     acc.push(...result);
//     selected.pop();
//     return acc;
//   }, []);
// }
