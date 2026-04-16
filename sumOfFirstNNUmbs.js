var sum = 0;
function sumOfNNumbars(n) {
    if (n == 0) return 0;
    return n + sumOfNNumbars(n -1);
}
let n = 5;
let result = sumOfNNumbars(n);
console.log("Result: ", result);
