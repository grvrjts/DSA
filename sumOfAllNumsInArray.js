/*Problem Statement: 
   Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n. */


function sumOfAllNumsInArray(n) {
    if (n ==  0) return arr[n];
    return arr[n] + sumOfAllNumsInArray(n - 1);
}
let arr = [1, 2, 3, 4, 5, 10, 20, 100];
console.log("Result: ", sumOfAllNumsInArray(arr.length - 1));

/*
Time & Space Complexity:
Time Complexity: O(n) one recursive call per element.

Space Complexity: O(n) Due to call stack.
*/