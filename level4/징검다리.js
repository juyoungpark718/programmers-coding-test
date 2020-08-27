/*
n만큼 제거 해야함.
제거 시 거리의 최솟값을 구할거임.
그 거리들의 최솟값 중 최댓값을 구함.

mid가 최솟값이라고 가정.
mid보다 작은 애가 있다면 돌을 지움.
계속 진행. count가 n보다 크면 right를 줄이고, count가 n보다 작으면 left를 늘림.
*/

function solution(distance, rocks, n) {
    var answer = 0;
    rocks.sort((a,b)=> a-b);
    let left = 0;
    let right = distance;
    let maxValue = 0;
    
    while(left <= right){
        let mid = parseInt((left+right)/2);
        let prev = 0;
        let min = Infinity;
        let count = 0;
        
        for(let i=0 ; i<rocks.length ; i++){
            if(count > n) break;
            let d = rocks[i] - prev;
            if(mid > d){
                count++;
            }else{
                min = min > d ? d : min;
                prev = rocks[i];
            }
            d = distance - prev;
            min = min > d ? d : min;
        }
        if(count <= n){
            left = mid + 1;
            maxValue = Math.max(maxValue,min);
        }else{
            right = mid - 1;
        }
    }
    answer = maxValue;
    return answer;
}