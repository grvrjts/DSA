/*
Problem Statement:
Given the head of a linked list, rotate the list to the right by k places.
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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list1 = new MyLinkedList();
list1.head = node1;
list1.size = 5;

MyLinkedList.prototype.rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    // calculate the length of the linked list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }
    k = k % length;
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead;

}
const rotatedListHead = list1.rotateRight(list1.head, 2);
console.log("Rotated List Head:", JSON.stringify(rotatedListHead));