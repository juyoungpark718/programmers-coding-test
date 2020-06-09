function findGroup(group, selected) {
  let groupId = selected;
  console.log(group[groupId]);
  while (group[groupId] > 0) {
    groupId = group[groupId];
    console.log(group[groupId], groupId);
  }
  return group[groupId];
}

findGroup([0, 0, 0, 1], 3);
