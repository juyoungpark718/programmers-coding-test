function solution(p) {
  var answer = "";
  answer = correct(p);
  return answer;
}

function correct(p) {
  let str;
  if (p === "") return "";
  let { u, v } = seperate(p);
  if (isCorrect(u)) {
    v = correct(v);
    return u + v;
  } else {
    v = correct(v);
    str = "(" + v + ")" + turnSide(u);
    return str;
  }
}

function isCorrect(p) {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    // if(stack.length === 0){
    //     stack.push(p[i]);
    // }else{
    if (stack[stack.length - 1] === "(" && p[i] === ")") stack.pop();
    else stack.push(p[i]);
    // }
  }
  if (stack.length === 0) return true;
  else return false;
}

function seperate(p) {
  let [right, left] = [0, 0];
  let [u, v] = ["", ""];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") right++;
    else left++;
    if (right === left && right + left > 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }
  return { u: u, v: v };
}

function turnSide(p) {
  let str = "";
  for (let i = 1; i < p.length - 1; i++) {
    if (p[i] === "(") str += ")";
    else str += "(";
  }
  return str;
}
