# 📚 Data Structures & Algorithms (DSA)

A comprehensive collection of DSA concepts with implementations and explanations.

---

## 📖 Table of Contents

- [Recursion](#recursion)
- [Searching & Sorting](#searching--sorting)

---

## Recursion

### Definition
A function calls itself to solve smaller versions of the same problem.

### 🔧 Core Components

Recursion has **two essential parts**:

1. **Base Case** - The stopping condition (When to stop)
   - This prevents infinite loops and stack overflow
   
2. **Recursive Case** - Where the function calls itself
   - Simplifies the problem with each call

### ⚠️ Common Mistakes

- **Missing Base Case** → Leads to stack overflow
- **Not Simplifying Input** → Never reaches the base case
- **Too Deep Recursion** → Causes memory issues with large inputs
- **Ignoring Time Complexity** → Creates inefficient solutions

### ✅ When to Use Recursion

Recursion is ideal for:

- Problems that can be broken into sub-problems
- **Tree & Graph** traversals
- **Backtracking** algorithms
- **Dynamic Programming** solutions
- **Divide & Conquer** approaches

### Fibonacci Numbers

#### What is a Fibonacci Number?
The Fibonacci sequence is a famous mathematical series in which each number is the sum of two preceding ones. It's defined by the recurrence relation:

F(0) = 0  
F(1) = 1  
F(n) = F(n-1) + F(n-2) for n > 1  

This generates a series like:  
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...  

Each number is the sum of the two before it.  
This sequence appears frequently in nature (e.g., flower petals, pine cones, and spiral shells), in algorithms (like dynamic programming), and even in computer science problems related to recursion, time complexity, and optimization.

---

## Searching & Sorting

### Linear Search
Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

#### Examples

**Example 1:**
```
Input: arr = [2, 4, 7, 10], target = 10
Output: 3
Explanation: 10 is found at index 3
```

**Example 2:**
```
Input: arr = [6, 8, 0, 3], target = 5
Output: -1
Explanation: 5 is not present in the array
```

#### Approach
1. Start from the first element of the array
2. Compare the current element with the target value
3. If a match is found, return the index
4. If the loop ends without finding the target, return `-1`

### Binary Search
Binary Search is an efficient algorithm used to find the position of a target value within a sorted array. Unlike linear search, it repeatedly divides the search interval in half, significantly reducing the number of comparisons.

#### Example
```
Input: [1, 3, 5, 7, 9]
Target: 7
Output: 2 (index position)
```

#### Approach
1. Set `left = 0` and `right = nums.length - 1`
2. While `left <= right`:
   - Calculate `middle = Math.floor((left + right) / 2)`
   - If `nums[middle] === target`, return `middle`
   - If `target < nums[middle]`, discard the right half: `right = middle - 1`
   - Else discard the left half: `left = middle + 1`
3. If the target is not found, return `-1`

### Time & Space Complexity

**Time Complexity:**
- Best Case: O(1) - when the target is found at the middle initially.
- Worst Case: O(log n) - the array is halved every iteration.
- Average Case: O(log n)

**Space Complexity:** O(1) - No additional data structures are used.


### Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
This process continues until the array is sorted.
After each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array.

#### Approach
- Iterate through the array multiple times.
- In each pass, compare adjacent elements.
- If the current element is greater than the next one, swap them.
- After each pass, the largest unsorted element moves to its correct position at the end.
- Use a boolean flag (`isSwapped`) to track whether any swapping happened.
- If no swaps occur during a full pass, the array is already sorted and the algorithm can exit early.
- Repeat this process for `n - 1` passes, or until no swaps are needed.

#### Time & Space Complexity
- **Best Case:** O(n) when the array is already sorted (with the `isSwapped` optimization).
- **Worst Case:** O(n²) when the array is in reverse order.
- **Space Complexity:** O(1) because Bubble Sort sorts in place with no extra space used.

### Selection Sort
Selection Sort is a simple comparison-based sorting algorithm that divides the array into a sorted subarray and an unsorted subarray. The algorithm repeatedly selects the smallest element from the unsorted portion and moves it to the end of the sorted portion.

#### Example
```
Input: [4, 5, 1, 3, 9]
Output: [1, 3, 4, 5, 9]
```

#### Approach
- Iterate over the array from index `0` to `n - 2`.
- For each index `i`, assume the element at `i` is the minimum in the unsorted part.
- Run an inner loop from `j = i + 1` to `n - 1` to find the actual minimum element.
- If a smaller element is found, update `min_idx`.
- After the inner loop, swap the element at `i` with the element at `min_idx` (if they are not the same).
- Repeat until the entire array is sorted.

#### Time & Space Complexity
- **Time Complexity:** O(n²) in best, average, and worst cases.
- **Comparisons:** Roughly `n * (n - 1) / 2` comparisons are performed.
- **Space Complexity:** O(1) because Selection Sort is an in-place algorithm.

#### Dry Run
```
Input: arr = [4, 5, 1, 3, 9]

i = 0 → min_idx = 0
   j = 1 → arr[1] = 5 > arr[0] = 4 → no change
   j = 2 → arr[2] = 1 < arr[0] = 4 → min_idx = 2
   j = 3 → arr[3] = 3 > arr[2] = 1 → no change
   j = 4 → arr[4] = 9 > arr[2] = 1 → no change
   swap arr[0] ↔ arr[2] → [1, 5, 4, 3, 9]

i = 1 → min_idx = 1
   j = 2 → arr[2] = 4 < arr[1] = 5 → min_idx = 2
   j = 3 → arr[3] = 3 < arr[2] = 4 → min_idx = 3
   j = 4 → arr[4] = 9 > arr[3] = 3 → no change
   swap arr[1] ↔ arr[3] → [1, 3, 4, 5, 9]

i = 2 → min_idx = 2
   j = 3 → arr[3] = 5 > arr[2] = 4 → no change
   j = 4 → arr[4] = 9 > arr[2] = 4 → no change
   no swap → [1, 3, 4, 5, 9]

i = 3 → min_idx = 3
   j = 4 → arr[4] = 9 > arr[3] = 5 → no change
   no swap → [1, 3, 4, 5, 9]

Final Sorted Array: [1, 3, 4, 5, 9]
```

Insertion Sort
### Insertion Sort
Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
It works by taking each element from the input and inserting it into the correct position in the already sorted portion of the array.
Starting from the second element, it compares the current element with the previous ones, shifting larger elements one position ahead to make space.
This process continues until all elements are sorted.
Insertion Sort is efficient for small or nearly sorted datasets and operates in-place without requiring extra memory.

#### Approach
1. Start from the second element (index `1`), since the first element is already "sorted".
2. Store the current element as `curr`.
3. Compare `curr` with the previous elements in the sorted portion.
4. Shift larger elements one position to the right to make room.
5. Insert `curr` at its correct position.
6. Repeat until the entire array is sorted.

#### Time & Space Complexity
- **Best Case:** O(n), when the array is already sorted.
- **Average Case:** O(n²)
- **Worst Case:** O(n²), when every element must be compared and shifted back to the start.
- **Space Complexity:** O(1), as sorting is done in place.

#### Dry Run
```
Input: arr = [4, 5, 1, 3, 9]

i = 1 → curr = 5, prev = 0
arr[0] = 4 ≤ 5 → no shifting
Insert curr → [4, 5, 1, 3, 9]

i = 2 → curr = 1, prev = 1
arr[1] = 5 > 1 → shift → [4, 5, 5, 3, 9]
arr[0] = 4 > 1 → shift → [4, 4, 5, 3, 9]
prev = -1 → stop
Insert curr → [1, 4, 5, 3, 9]

i = 3 → curr = 3, prev = 2
arr[2] = 5 > 3 → shift → [1, 4, 5, 5, 9]
arr[1] = 4 > 3 → shift → [1, 4, 4, 5, 9]
arr[0] = 1 ≤ 3 → stop
Insert curr → [1, 3, 4, 5, 9]

i = 4 → curr = 9, prev = 3
arr[3] = 5 ≤ 9 → no shifting
Insert curr → [1, 3, 4, 5, 9]

Final Sorted Array: [1, 3, 4, 5, 9]
```
  