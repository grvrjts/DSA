/**
 * Problem: Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * Do not modify node values; only nodes themselves may be changed.
 *
 * Example:
 * Input:  1 -> 2 -> 3 -> 4
 * Output: 2 -> 1 -> 4 -> 3
 *
 * Notes:
 * - Operate by changing node pointers.
 * - Works for lists with odd/even length.
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
    let dummy = new Node(0);
    dummy.next = head;
    let p = dummy;
    let c = head;
    let n = head.next;
    while (c && n) {
        p.next = n;
        c.next = n.next;
        n.next = c;
        p = c;
        c = p.next;
        n = c && c.next;
    }
    return dummy.next;
}

const swappedList = list.swapPairs(list.head);  
console.log("Swapped List Head:", JSON.stringify(swappedList)); 

/**
 * Complexity
 *
 * Time:  O(n) — we visit each node once.
 * Space: O(1) — constant extra space (only a few pointers).
 */