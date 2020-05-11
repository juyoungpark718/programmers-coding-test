function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge = new Array(bridge_length);
  var passingWeight = 0;
  bridge.fill(0);
  var truck = truck_weights.length;
  var passed = [];
  var passedCar = 0;
  while (true) {
    var temp = truck_weights[0];
    if (passingWeight + temp <= weight) {
      passedCar = bridge.shift();
      if (passedCar !== 0) {
        passingWeight = passingWeight - passedCar;
        passed.push(passedCar);
        bridge.push(temp);
        truck_weights.shift();
        passingWeight = passingWeight + temp;
      } else {
        bridge.push(temp);
        truck_weights.shift();
        passingWeight = passingWeight + temp;
      }
    } else {
      passedCar = bridge.shift();
      if (passedCar !== 0) {
        passingWeight = passingWeight - passedCar;
        if (passingWeight + temp <= weight) {
          bridge.push(temp);
          passingWeight = passingWeight + temp;
          truck_weights.shift();
        } else {
          bridge.push(0);
        }
        passed.push(passedCar);
      } else {
        bridge.push(0);
      }
    }
    answer++;
    console.log(`bridge : ${bridge} , time : ${answer}, passed : ${passed}`);
    if (passed.length === truck) {
      break;
    }
  }

  return answer;
}
// var answer = solution(2, 10, [7, 4, 5, 6]);
// var answer = solution(100, 100, [10]);
// var answer = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
// var answer = solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2], 19);
var answer = solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1], 19);
// console.log(answer);

// /*
// 7이 출발 => 다리에는 건널수 없음 3초걸림.
// 4,5출발 => 4초 걸림 근데 -1초
// 6이 출발 => 3초걸림 근데 -1초
//  */
