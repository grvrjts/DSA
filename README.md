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