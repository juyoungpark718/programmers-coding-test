function solution(clothes) {
  var answer = 0;
  var cate = {};
  clothes.map((el) => {
    if (cate[el[1]]) {
      cate[el[1]]++;
    } else {
      cate[el[1]] = 1;
    }
    return el;
  });
  var cateArray = Object.keys(cate);
  answer = cateArray.reduce((acc, el) => {
    return acc * (cate[el] + 1);
  }, 1);
  return answer - 1;
}
