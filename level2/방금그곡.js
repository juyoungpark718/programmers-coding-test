function solution(m, musicinfos) {
  var answer = "";
  m = convert(m);
  let musicinfosHash = musicinfos.map((e) => makeHash(e));
  musicinfos = musicinfosHash.filter((e) => {
    if (e.totalSheet.match(m)) {
      return true;
    }
  });
  if (musicinfos.length === 0) return "(None)";
  if (musicinfos.length !== 1) {
    musicinfos.sort((a, b) => a.playTime - b.playTime);
    // console.log(musicinfos);
    let pickedMusic = musicinfos.pop();
    let pickedMusicArr = [pickedMusic];
    // console.log(musicinfos);
    for (let i = musicinfos.length - 1; i >= 0; i--) {
      // console.log(musicinfos[i])
      if (pickedMusic.playTime === musicinfos[i].playTime) {
        pickedMusicArr.push(musicinfos[i]);
      } else {
        break;
      }
    }
    // console.log(pickedMusicArr)
    if (pickedMusicArr.length !== 1) {
      // console.log(pickedMusicArr)
      let final = pickedMusicArr.map((e) => {
        let idx = musicinfosHash.findIndex((el) => el.name === e.name);
        return { idx, name: e.name };
      });
      final.sort((a, b) => a.idx - b.idx);
      // console.log(final);
      return final[0].name;
    } else {
      return pickedMusicArr[0].name;
    }
  } else {
    return musicinfos[0].name;
  }
}

function makeHash(musicInfo) {
  let [start, end, name, sheet] = musicInfo.split(",");
  sheet = convert(sheet);
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");
  const playTime =
    Number(endHour) * 60 +
    Number(endMinute) -
    (Number(startHour) * 60 + Number(startMinute));
  let totalSheet = "";
  for (let i = 0; i < playTime; i++) {
    if (i / sheet.length > 0) {
      let divide = Math.floor(i / sheet.length);
      totalSheet += sheet[i - sheet.length * divide];
    } else {
      totalSheet += sheet[i];
    }
  }
  return { name, totalSheet, playTime };
}

function convert(str) {
  str = replaceAll(str, "C#", "c");
  str = replaceAll(str, "D#", "d");
  str = replaceAll(str, "F#", "f");
  str = replaceAll(str, "G#", "g");
  str = replaceAll(str, "A#", "a");
  return str;
}

function replaceAll(str, org, dest) {
  return str.split(org).join(dest);
}
