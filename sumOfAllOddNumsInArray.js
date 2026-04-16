function sumOfAllOddNumsInArray(n) {
    let isOdd = arr[n] % 2 !== 0;
        if (n == 0) return isOdd ? arr[n] : 0;
        return (isOdd ? arr[n] : 0) + sumOfAllOddNumsInArray(n - 1);
}
let arr = [1, 2, 3, 4, 5, 10, 20, 100, 200, 9];
console.log("Result: ", sumOfAllOddNumsInArray(arr.length - 1));
