const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const expr = [...input[0]];
const stack = [];
const result = [];

const getPriority = (str) => {
  if (["*", "/"].some((e) => e === str)) return 2;
  if (["+", "-"].some((e) => e === str)) return 1;
  if (["(", ")"].some((e) => e === str)) return 0;
};

for (let i = 0; i < expr.length; i++) {
  if (expr[i] === "+" || expr[i] === "*" || expr[i] === "/" || expr[i] === "-") {
    while (stack.length && getPriority(stack[stack.length - 1]) >= getPriority(expr[i])) {
      result.push(stack.pop());
    }
    stack.push(expr[i]);
    continue;
  }
  if (expr[i] === "(") {
    stack.push(expr[i]);
    continue;
  }
  if (expr[i] === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.pop();
    continue;
  }
  result.push(expr[i]);
}

stack.reduceRight((acc, val) => result.push(val), 0);

log(result.join(""));
