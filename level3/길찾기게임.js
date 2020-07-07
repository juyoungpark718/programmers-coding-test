class Node {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  add(node) {
    if (this.root === null) {
      this.root = node;
      return;
    }
    if (this.root.x > node.x) {
      if (this.root.left === null) {
        this.root.left = new BinaryTree(node);
        return;
      } else {
        this.root.left.add(node);
      }
    } else {
      if (this.root.right === null) {
        this.root.right = new BinaryTree(node);
        return;
      } else {
        this.root.right.add(node);
      }
    }
  }
  pre(answer) {
    answer.push(this.root.id);
    if (this.root.left !== null) this.root.left.pre(answer);
    if (this.root.right !== null) this.root.right.pre(answer);
  }

  post(answer) {
    if (this.root.left !== null) this.root.left.post(answer);
    if (this.root.right !== null) this.root.right.post(answer);
    answer.push(this.root.id);
  }
}

function solution(nodeinfo) {
  let tree = new BinaryTree();
  nodeinfo = nodeinfo.map((e, id) => {
    return [id + 1, e[0], e[1]];
  });
  nodeinfo.sort((a, b) => a[2] - b[2]);
  let level = nodeinfo[nodeinfo.length - 1][2];
  while (nodeinfo.length) {
    let nodes = nodeinfo.filter((e) => level === e[2]);
    nodes.sort((a, b) => b[1] - a[1]);
    nodeinfo = nodeinfo.filter((e) => level !== e[2]);
    nodes.forEach((e) => {
      let node = new Node(e[0], e[1], e[2]);
      tree.add(node);
    });
    level--;
  }
  let preOrder = [];
  let postOrder = [];
  tree.pre(preOrder);
  tree.post(postOrder);
  return [preOrder, postOrder];
}
