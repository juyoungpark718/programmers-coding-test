const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

class Tree{
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }

  add(parent, value, dir){
    if(value === ".") return;
    if(!this.value){
      this.value = parent;
      if(dir === 1) this.left = new Tree(value, null, null);
      else this.right = new Tree(value, null, null);
      return;
    }
    if(this.value === parent){
      if(dir === 1) this.left = new Tree(value, null, null);
      else this.right = new Tree(value, null, null);
      return;
    }
    if(this.left) this.left.add(parent, value, dir);
    if(this.right) this.right.add(parent, value, dir);
  }

  pre(){
    process.stdout.write(this.value);
    if(this.left) this.left.pre();
    if(this.right) this.right.pre();
  }
  in(){
    if(this.left) this.left.in();
    process.stdout.write(this.value);
    if(this.right) this.right.in();
  }
  post(){
    if(this.left) this.left.post();
    if(this.right) this.right.post();
    process.stdout.write(this.value);
  }
}

const N = +input[0];
const nodes = input.slice(1, N+1).map(e => e.split(" "));
const tree = new Tree();

nodes.forEach(node => {
  const [parent, left, right] = node;
  tree.add(parent, left, 1);
  tree.add(parent, right, -1);
})

tree.pre();
process.stdout.write("\n");
tree.in();
process.stdout.write("\n");
tree.post();