function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        max = max > arr[i] ? max : arr[i]
    }
    return max;
}

let arr = [1212, 3434, 5, 6, 8, 234, 3, 5, 8, 7];
console.log("Max number is :", findMax(arr));