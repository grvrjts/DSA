/**
 * Problem Statement:
 * ==================
 * Write a recursive function that calculates the sum of all odd numbers
 * in an array arr up to index n.
 */
function sumOfAllOddNumsInArray(n) {
    let isOdd = arr[n] % 2 !== 0;
        if (n == 0) return isOdd ? arr[n] : 0;
        return (isOdd ? arr[n] : 0) + sumOfAllOddNumsInArray(n - 1);
}
let arr = [1, 2, 3, 4, 5, 10, 20, 100, 200, 9];
console.log("Result: ", sumOfAllOddNumsInArray(arr.length - 1));
/**
 * Complexity Analysis:
 * ===================
 * Time Complexity:  O(n)
 *   - Each element is visited once through recursion
 *
 * Space Complexity: O(n)
 *   - Due to recursive call stack
 */