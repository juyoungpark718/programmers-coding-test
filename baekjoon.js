function b1342() {
  var fs = require("fs");
  // var input = fs.readFileSync('/dev/stdin').toString().split('\n');
  var s = fs.readFileSync("./stdin").toString().split("");
  console.log(s);
  var n = s.length;
  var arr = new Array(n);
  var ans = [];
  backTrack(arr, s, 0, ans, n);
  console.log(ans);
}

function backTrack(arr, s, count, ans, n) {
  if (count === n) {
    var str = "";
    for (var a = 0; a < arr.length; a++) {
      str += arr[a];
    }
    console.log("str:", str);

    if (ans.every((e) => e !== str)) {
      ans.push(str);
    }
    console.log("ans:", ans);
    return;
  }

  var tempS = s.slice();
  var newArr = arr.slice();
  for (var j = 0; j < tempS.length; j++) {
    console.log("tempS:", tempS, "index j:", j, "count:", count);
    if (check(newArr, tempS[j], count)) {
      newArr[count] = tempS[j];
      console.log("check: true");

      tempS.splice(j, 1);
      console.log("new arr status:", newArr);

      backTrack(newArr, tempS, count + 1, ans, n);
      newArr[count] = null;
    }
  }
}

function check(arr, s, count) {
  console.log("arr:", arr, "s[j]", s, "count:", count);
  if (arr[count - 1] === s) return false;
  return true;
}

b1342();
