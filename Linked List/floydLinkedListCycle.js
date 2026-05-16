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

MyLinkedList.prototype.hasCycle = function () {
    let slow = this.head;
    let fast = this.head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

let hasCycle = list.hasCycle(); // true
console.log("Does the linked list have a cycle?", hasCycle);