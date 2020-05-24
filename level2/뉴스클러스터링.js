function solution(str1, str2) {
  var answer = 0;
  answer = jaccard(divideStr(str1), divideStr(str2));
  return answer;
}

function divideStr(str) {
  let newArr = [];
  let regExp = /^[a-z]*$/;
  for (let i = 0; i < str.length - 1; i++) {
    let temp = (str[i] + str[i + 1]).toLowerCase();
    if (regExp.test(temp)) newArr.push(temp);
  }
  return newArr;
}

function findDup(arr1, arr2) {
  let dupArr = [];
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  arr1.map((arr1_e) => {
    arr2.map((arr2_e) => {
      if (arr1_e === arr2_e) {
        dupArr.push(arr1_e);
      }
    });
  });
  return dupArr;
}

function countDup(arr, arr2, dupStr) {
  let max = 0;
  let min = 0;
  let count = 0;
  let count2 = 0;

  arr.map((e) => {
    if (dupStr.includes(e)) count++;
  });
  arr2.map((e) => {
    if (dupStr.includes(e)) count2++;
  });

  if (count > count2) {
    return { str: dupStr, max: count, min: count2 };
  } else {
    return { str: dupStr, max: count2, min: count };
  }
}

function jaccard(arr1, arr2) {
  let dupArr = findDup(arr1, arr2);
  let dupHashArr = dupArr.map((e) => {
    return countDup(arr1, arr2, e);
  });
  arr1 = arr1.filter((e) => {
    if (dupArr.includes(e)) return false;
    else return true;
  });
  arr2 = arr2.filter((e) => {
    if (dupArr.includes(e)) return false;
    else return true;
  });
  let intersection = dupHashArr.reduce((acc, val) => acc + val.min, 0);
  let union =
    arr1.length +
    arr2.length +
    dupHashArr.reduce((acc, val) => acc + val.max, 0);
  if (intersection === 0 && union === 0) return 65536;
  return Math.floor((intersection / union) * 65536);
}
