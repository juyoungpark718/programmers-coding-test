class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
    this.count = 0;
  }
}

class Trie {
  constructor(length) {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    currentNode.count++;
    for (let i = 0; i < string.length; i++) {
      if (currentNode.child[string[i]] === undefined) {
        currentNode.child[string[i]] = new Node(currentNode.value + string[i]);
      }
      currentNode = currentNode.child[string[i]];
      currentNode.count++;
    }
  }

  search(str) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      if (currentNode.child[str[i]]) {
        currentNode = currentNode.child[str[i]];
      } else {
        return 0;
      }
    }
    return currentNode.count;
  }
}

function solution(words, queries) {
  var answer = [];
  let tries = Array(100001);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let re = [...word].reverse().join("");
    let len = words[i].length;
    if (tries[len]) {
      tries[len][0].insert(word);
      tries[len][1].insert(re);
    } else {
      tries[len] = Array(2);
      tries[len][0] = new Trie();
      tries[len][1] = new Trie();
      tries[len][0].insert(word);
      tries[len][1].insert(re);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    if (tries[query.length] === undefined) {
      answer.push(0);
      continue;
    }
    if ([...query].every((e) => e === "?")) {
      let len = query.length;
      answer.push(tries[len][0].root.count);
    } else if (query[0] !== "?") {
      let len = query.length;
      let idx = query.indexOf("?");
      let target = query.slice(0, idx);
      answer.push(tries[len][0].search(target));
    } else {
      let re = [...query].reverse().join("");
      let len = query.length;
      let idx = re.indexOf("?");
      let target = re.slice(0, idx);
      answer.push(tries[len][1].search(target));
    }
  }

  return answer;
}
