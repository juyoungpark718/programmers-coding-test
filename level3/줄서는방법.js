function solution(n, k) {
  var answer = [];
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let fac = arr.reduce((acc, val) => acc * val, 1);
  k--;
  while (answer.length !== n) {
    fac = fac / arr.length;
    // console.log(fac);
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);
    k = k % fac;
    arr = arr.filter((e) => e !== temp);
  }
  return answer;
}

// function solution(n, k) {
//     var answer = [];
//     let arr = [];
//     let order = n;
//     for(let i=1 ; i<=n ; i++) arr.push(i);
//     let mul = arr.reduce((acc,val)=>acc*val,1)/n;
//     while(true){
//         if(mul*n <= k){
//             order = n;
//             break;
//         }
//         n--;
//     }
//     let idx = k - mul*order;
//     // console.log(order);
//     arr = arr.filter(e => e !== order+1);
//     permutation(arr,k,[order+1],answer);
//     // console.log(answer);
//     return answer[idx-1];
// }

// function permutation(arr,k,total,answer){
//     for(let i=0 ; i<arr.length ; i++){
//         if(answer.length === k) return ;
//         let newArr = [...arr];
//         newArr.splice(i,1);
//         total.push(arr[i]);
//         if(newArr.length === 0) answer.push([...total]);
//         permutation(newArr,k,[...total],answer);
//         total.pop();
//     }
// }
