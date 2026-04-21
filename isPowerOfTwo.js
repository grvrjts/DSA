/**
 * Problem Statement:
 * ==================
 * Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.
 */

/**
 * Complexity Analysis:
 * ===================
 * Time Complexity: O(log n)
 *
 * Space Complexity: O(log n)
 *   - Due to recursion stack
 */

function isPowerOfTwo(n) {
    if (n == 1) return true;
    else if (n > 1 || n % 2 !== 0)return false;
    return isPowerOfTwo(n / 2)
}
console.log("Result :", isPowerOfTwo(10))