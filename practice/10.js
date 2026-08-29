function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = arr[i] < 0 ? ++count : count;
    }
    return count;
}
let arr = [2,4,2,6,-9,-3]
console.log("total Negative numbers :", countNegative(arr));