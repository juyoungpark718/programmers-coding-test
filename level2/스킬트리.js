function solution(skill, skill_trees) {
  var answer = 0;
  let asdf = "asdf";
  console.log([...asdf]);
  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [...skill_trees[i]];
    temp = temp.filter((e) => skill.includes(e)).join("");
    if (skill.includes(temp) && skill[0] === temp[0]) {
      answer++;
    }
    if (temp.length === 0) {
      answer++;
    }
  }
  return answer;
}
