const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(e => +e);

class Queue{
    head = null;
    tail = null;
    $size = 0;

    insert = (value) => {
        if(!this.head){
            this.$size++;
            this.head = { value, next:null };
            this.tail = this.head;
            return this.head;
        }
        this.tail.next = { value, next:null };
        this.tail = this.tail.next;
        this.$size++; 
        return this.tail;
    }

    shift = () => {
        if(this.$size === 1){
            const temp = this.head.value;
            this.head = null;
            this.tail = null;
            this.$size--;
            return temp;
        }
        if(!this.head) return null;
        let temp = this.head;
        this.head = this.head.next;
        this.$size--;
        return temp.value;
    }

    getSize = () => this.$size;
}

const queue = new Queue();
Array.from(Array(N), (_,id) => queue.insert(id+1));
const result = [];
let count = 0;

while(queue.getSize()){
    let picked = queue.shift();
    if(count === K-1) (result.push(picked), count = 0);
    else (queue.insert(picked), count++);
}

console.log(`<${result.join(", ")}>`);