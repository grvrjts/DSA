/**
 * Problem Statement:
 * ==================
 * Write a recursive function that returns the factorial of a number n.
 */

function fact(n){
    if(n==0) return 1;
    return n * fact(n-1)
}
const n = 5;
console.log("Factorial of ", n, " is: ", fact(n));

/**
 * Complexity Analysis:
 * ===================
 * Time Complexity:  O(n)
 *   - One recursive call per number from n to 0
 *
 * Space Complexity: O(n)
 *   - Due to recursive call stack
 */