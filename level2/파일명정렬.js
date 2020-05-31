function solution(files) {
  var answer = [];
  let hashs = makeHashFiles(files);
  hashs.sort((a, b) => {
    let locale = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
    if (locale === 0) {
      if (a.number === b.number) {
        return a.id - b.id;
      }
      return a.number - b.number;
    }
    return locale;
  });
  answer = hashs.map((e) => e.file);
  return answer;
}

function splitFile(file) {
  let head = file.split(/[0-9]+/g)[0];
  let number = file.match(/[0-9]+/g)[0];
  number = number.length > 5 ? parseInt(number.slice(0, 5)) : parseInt(number);
  return { head, number };
}

function makeHashFiles(files) {
  return files.map((e, id) => {
    return { id: id, ...splitFile(e), file: e };
  });
}
