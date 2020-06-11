function solution(begin, target, words) {
  var answer = 0;
  answer = abc([begin], target, words, 0);
  return answer;
}

function abc(begins, target, words, cost) {
  if (begins.includes(target)) return cost;
  if (begins.length === 0) return 0;
  let newBegins = [];
  begins.forEach((e) => {
    words = words.filter((word) => {
      let count = 0;
      [...e].forEach((el, idx) => {
        if (word[idx] === el) count++;
      });
      if (count === 2) {
        newBegins.push(word);
        count = 0;
        return false;
      } else {
        count = 0;
        return true;
      }
    });
  });
  return abc(newBegins, target, words, ++cost);
}
