class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle in the list

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 4;

/**
Time and Space Complexity:
Time Complexity: O(n), where n is the number of nodes in the list.
Space Complexity: O(n), in the worst case we store all nodes in a set.
**/
MyLinkedList.prototype.hasCycle = function () {
    let current = this.head;
    let set = new Set();
    while (current) {
        if (set.has(current)) return true;
        set.add(current);
        current = current.next;
    }
    return false;
}

const hasCycle = list.hasCycle(); // true
console.log("Does the linked list have a cycle?", hasCycle);
