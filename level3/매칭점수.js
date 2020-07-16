const regExp = {
  meta: /<meta.+?content="(https:\/\/.+?)"/, // Url
  a: /<a href="(https:\/\/.+?)">/g, // a tag href
  href: /<a href="(https:\/\/.+?)">/,
  removeA: /<a href="https:\/\/.+?">[A-Za-z\s]*<\/a>/, // remove a
  body: /<body>([\w\W]*)<\/body>/, // body
};

function solution(word, pages) {
  var answer = 0;
  const pagesInfo = new Map();
  setPageInfo(pages, pagesInfo, word);
  let indexs = getPageIndexs(pagesInfo);
  // console.log(indexs);
  return indexs.pop().id;
}

function getPageIndexs(pagesInfo) {
  let indexs = [];
  for (let pageKey of pagesInfo.keys()) {
    let page = pagesInfo.get(pageKey);
    let linkScore = page.linkScore ? page.linkScore : 0;
    indexs.push({ id: page.id, total: page.baseScore + linkScore });
  }
  indexs.sort((a, b) => {
    if (a.total > b.total) {
      return 1;
    } else if (a.total < b.total) {
      return -1;
    } else {
      return b.id - a.id;
    }
  });
  return indexs;
}

function setPageInfo(pages, pagesInfo, word) {
  pages.forEach((page, id) => {
    let url = getMetaUrl(page);
    let hrefs = getHrefs(page);
    let body = getBody(page);
    let wordCount = getWordCount(body, word);
    let pageInfo = {
      id,
      baseScore: wordCount,
      externalLink: hrefs,
    };
    pagesInfo.set(url, pageInfo);
  });
  for (let pageInfo of pagesInfo.keys()) {
    let info = pagesInfo.get(pageInfo);
    let linkScore = info.baseScore / info.externalLink.length;

    info.externalLink.forEach((exLink) => {
      let page = pagesInfo.get(exLink);
      if (page) {
        if (page.linkScore) {
          page.linkScore += linkScore;
          pagesInfo.set(exLink, { ...page });
        } else {
          pagesInfo.set(exLink, { ...page, linkScore: linkScore });
        }
      }
    });
  }
}

function getWordCount(body, keyword) {
  let words = body.split(/\W|\d/);
  let count = 0;
  words.forEach((word) => {
    if (word.toLowerCase() === keyword.toLowerCase()) {
      count++;
    }
  });
  return count;
}

function getBody(page) {
  // body 안의 내용 가져오기.
  let body = page.match(regExp.body)[1];
  let removed = body
    .split(/<a href="https:\/\/.+?">[A-Za-z\s]*<\/a>/)
    .map((e) => e.trim())
    .filter((e) => e !== ""); // a태그 제거.
  return removed.join("\n");
}

function getMetaUrl(page) {
  let meta = page.match(regExp.meta);
  return meta[1];
}

function getHrefs(page) {
  let hrefs = [];
  let matchResults = page.match(regExp.a);
  if (matchResults !== null) {
    for (let matchResult of matchResults) {
      let href = matchResult.match(regExp.href)[1];
      hrefs.push(href);
    }
  }
  return hrefs;
}
