function solution(cacheSize, cities) {
  var answer = 0;
  let cache = {};
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    if (findCity(cache, city.toLowerCase())) {
      answer += 1;
      cache[findCity(cache, city.toLowerCase())] = 0;
    } else {
      answer += 5;
      cache = addCache(cache, cacheSize, city.toLowerCase());
    }
    cache = updateCache(cache);
  });
  return answer;
}

function addCache(cache, cacheSize, city) {
  //캐시에 도시를 추가.
  const keyArr = Object.keys(cache);
  if (keyArr.length === cacheSize) {
    keyArr.sort((a, b) => {
      return cache[b] - cache[a];
    });
    delete cache[keyArr[0]];
  }
  cache[city] = 0;
  return cache;
}

function updateCache(cache) {
  // 캐시에 있는 도시들이 사용되지 않았을때, +1씩 추가.
  for (let key in cache) {
    cache[key] += 1;
  }
  return cache;
}

function findCity(cache, city) {
  // 도시가 존재하는지 아닌지 찾음.
  const keyArr = Object.keys(cache);
  const idx = keyArr.findIndex((e) => e === city);
  return keyArr[idx];
}
