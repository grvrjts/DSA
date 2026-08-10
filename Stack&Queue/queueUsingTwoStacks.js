/*
*/

var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];

}

MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

MyQueue.prototype.pop = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop()
}

MyQueue.prototype.peekOrTop = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1]

}

MyQueue.prototype.empty = function () {
    return this.p1.length === 0
}


/*
Time Complexity:
push → O(1)
pop → O(n)
top → O(n)
empty → O(1)

Space Complexity:
Space Complexity = O(n)

Where n is the total number of elements in the stack.
*/