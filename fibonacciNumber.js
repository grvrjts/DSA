/**
 * Function to calculate the nth Fibonacci number using recursion.
 *
 * The Fibonacci sequence is a series of numbers where each number is the sum
 * of the two preceding ones, usually starting with 0 and 1.
 *
 * Time Complexity: O(2^n)
 * - Each function call makes 2 recursive calls, leading to a binary tree of calls.
 * - For large n, this becomes very inefficient as many subproblems are solved repeatedly.
 *
 * Space Complexity: O(n)
 * - The maximum call depth is n, so the space used on the call stack is linear.
 */
function fibonacciNumber(n) {
    if (n <= 1) return n;
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log("Result: ", fibonacciNumber(10))