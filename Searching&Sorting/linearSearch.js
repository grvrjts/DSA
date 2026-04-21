function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}   
let arr = [5, 3, 2, 8, 1];
let target = 2;
let result = linearSearch(arr, target);
console.log("Result: ", result);

/**
 * Linear Search Algorithm
 *
 * A simple search algorithm that finds a specific element in an array
 * by checking each element one by one until the target is found or the
 * end of the array is reached.
 *
 * Time Complexity: O(n)
 * - In the worst case, the algorithm traverses the entire array
 * - Each element is checked exactly once
 *
 * Space Complexity: O(1)
 * - Constant space, as no additional data structures are used
 */