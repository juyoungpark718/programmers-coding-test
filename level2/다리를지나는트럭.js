function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge = new Array(bridge_length);
  var passingWeight = 0;
  bridge.fill(0);
  var truck = truck_weights.length;
  var passed = [];
  var passedCar = 0;
  while (true) {
    var temp = truck_weights.find((el, index) => index === 0);
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
    // console.log(`bridge : ${bridge} , time : ${answer}, passed : ${passed}`);
    if (passed.length === truck) {
      break;
    }
  }

  return answer;
}

/*
  지나가는데 걸리는 시간
  렝쓰
  */
