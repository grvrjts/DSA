/**
 *Problem Statement:
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list’s nodes (i.e., only nodes themselves may be changed.)
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = null;

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
let list = new MyLinkedList();
list.head = node1;
list.size = 6;

MyLinkedList.prototype.swapPairs = function (head) {
    if (!head || !head.next) return head;
    let l = head;
    let r = head.next;
    l.next = this.swapPairs(r.next);
    r.next = l;
    return r;
}

const swappedList = list.swapPairs(list.head);
console.log("Swapped List Head:", JSON.stringify(swappedList));

/**
 * Complexity
 *
Time Complexity: O(n), where n is the number of nodes in the list.
Space Complexity: O(n) due to recursive call stack.
 */