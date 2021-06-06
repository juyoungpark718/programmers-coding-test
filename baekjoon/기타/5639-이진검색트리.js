const log = console.log;
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./stdin").toString().trim().split("\n");
input = input.map(e => +e);

class BinaryTree{
  constructor(left, right, value){
    this.left = left;
    this.right = right;
    this.value = value;
  }

  add(value){
    if(!this.value){
      this.value = value;
      return;
    }
    if(this.value > value){
      if(!this.left){
        this.left = new BinaryTree(undefined, undefined, value);
        return;
      }
      this.left.add(value);
      return;
    }

    if(this.value < value){
      if(!this.right){
        this.right = new BinaryTree(undefined, undefined, value);
        return;
      }
      this.right.add(value);
      return;
    }
  }
  print(){
    if(!this.left && !this.right){
      console.log(this.value);
      return;
    }
    if(this.left) this.left.print();
    if(this.right) this.right.print();
    console.log(this.value);
  }
}

const btree = new BinaryTree();

input.map(e => btree.add(e));

btree.print();