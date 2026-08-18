/*
Problem Statement:
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:


MinStack()initializes the stack object.
void push(int val)pushes the element val onto the stack.
void pop()removes the element on the top of the stack.
int top()gets the top element of the stack.
int getMin()retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

function minStack() {
    this.s = [];
}

minStack.prototype.push = function (val) {
    if (this.s.length === 0) {
        this.s.push([val, val]);
    }else{
        let lastMin = this.s[this.s.length -1 ][1];
        let minValue = Math.min(val, lastMin)
        this.s.push([val, minValue]);
    }
}

minStack.prototype.pop = function () {
    this.s.pop();
}

minStack.prototype.top = function () {
    return this.s[this.s.length - 1][0];
}

minStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1];
}

/*
Time Complexity:
All operations: O(1)

Space Complexity:
Space Complexity = O(n)
*/