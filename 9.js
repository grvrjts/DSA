function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max;
    }
    return max;
}


let arr = [1, 2, 100, 476, 826, 3898, 4, 5];
console.log(findMax(arr))