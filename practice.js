class a {
  constructor() {
    this(size) = Symbol("size");
    size = 1;
  }
  print() {
    console.log(size);
  }
}

const b = new a();
b.print();
