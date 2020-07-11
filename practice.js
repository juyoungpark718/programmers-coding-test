class Node {
  constructor(value = "", count = 0) {
    this.value = value;
    this.end = false;
    this.child = {};
    this.count = count;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let currentNode = this.root;
    for (var i = 0; i < string.length; i++) {
      let currentChar = string[i];
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar,
          0
        );
      }
      currentNode = currentNode.child[currentChar];
      currentNode.count++;
    }
    currentNode.end = true;
  }
  search(string) {
    let currentNode = this.root;
    for (var i = 0; i < string.length; i++) {
      let currentChar = string[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      } else {
        return 0;
      }
    }
    return currentNode.count;
  }
}

function solution(words, queries) {
  var answer = [];
  var array = new Array(100001).fill(0);
  for (var i = 1; i <= 100001; i++) {
    var pretrie = new Trie();
    var sutrie = new Trie();
    array[i] = [pretrie, sutrie];
  }
  for (var i = 0; i < words.length; i++) {
    var ptr = words[i].length;
    array[ptr][0].insert(words[i]);
    array[ptr][1].insert(words[i].split("").reverse().join(""));
  }
  for (var i = 0; i < queries.length; i++) {
    var len = queries[i].length;
    var str = queries[i].split("?").join("");

    if (str.length == 0 || queries[i][0] !== "?") {
      var ans = array[len][0].search(str);
      answer.push(ans);
    } else {
      var ans = array[len][1].search(str);
      answer.push(ans);
    }
  }

  return answer;
}
