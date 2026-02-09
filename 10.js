function findNagative(arr) {
    let countNegative = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] < 0){
            countNegative++;
        }
    }
    return countNegative;
}


let arr = [1, -2, 3, -4, 5,10,-1, -5, -6   ];
console.log(findNagative(arr))