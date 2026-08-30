// your code goes here
let arr = [0, 1, 3, 0, 12];

function moveZeroes(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i];
            x++
        }
    }

    for (let i = x; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log("Result:", moveZeroes(arr))