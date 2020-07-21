const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const people = Number(input[0]);
const [targetPerson1, targetPerson2] = input[1]
  .trim()
  .split(" ")
  .map((person) => Number(person));

const getRelations = (inputs) => {
  const relations = [];
  inputs.forEach((input) => {
    const relation = input
      .trim()
      .split(" ")
      .map((person) => Number(person));
    relations.push([...relation, 0]);
  });
  return relations;
};

const relations = getRelations(input.slice(3, input.length));
const personInfos = Array(people + 1).fill(0);

const excuteBFS = (targetPerson1) => {
  const queue = [targetPerson1];
  while (queue.length !== 0) {
    const person = queue.shift();
    const connected = [];
    for (let i = 0; i < relations.length; i++) {
      const [parent, child, visited] = relations[i];
      if (parent === person && visited === 0) {
        personInfos[child] = personInfos[person] + 1;
        relations[i] = [parent, child, 1];
        connected.push(child);
      } else if (child === person && visited === 0) {
        personInfos[parent] = personInfos[person] + 1;
        relations[i] = [parent, child, 1];
        connected.push(parent);
      }
    }
    queue.push(...connected);
  }
};

excuteBFS(targetPerson1);
console.log(personInfos[targetPerson2] === 0 ? -1 : personInfos[targetPerson2]);
