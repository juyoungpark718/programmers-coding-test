function solution(n, words) {
  var answer = [];
  let usedWords = [];
  let number = 0;
  let order = 0;

  for (let i = 0; i < words.length; i++) {
    if (!usedWords.includes(words[i])) {
      if (usedWords.length === 0) {
        usedWords.push(words[i]);
        continue;
      } else {
        if (
          usedWords[usedWords.length - 1][
            usedWords[usedWords.length - 1].length - 1
          ] === words[i][0]
        ) {
          usedWords.push(words[i]);
          continue;
        } else {
          number = (i + 1) % n === 0 ? n : (i + 1) % n;
          order = Math.floor(i / n) + 1;
          return [number, order];
        }
      }
    } else {
      number = (i + 1) % n === 0 ? n : (i + 1) % n;
      order = Math.floor(i / n) + 1;
      return [number, order];
    }
  }

  return [0, 0];
}
