/*
Problem Statement:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
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

let node6 = new Node(1);
let node7 = new Node(4);
let node8 = new Node(6);
let node9 = new Node(8);
let node10 = new Node(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
node10.next = null;

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list1 = new MyLinkedList();
list1.head = node1;
list1.size = 5;

let list2 = new MyLinkedList();
list2.head = node6;
list2.size = 5;

MyLinkedList.prototype.mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let curr = null;
    if (l1.value < l2.value) {
        curr = l1;
        l1 = l1.next;
    } else {
        curr = l2;
        l2 = l2.next;
    }
    let start = curr;
    while(l1 && l2){
        if(l1.value < l2.value){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(!l1) {
        curr.next = l2;
    }
    if(!l2){
        curr.next = l1;
    }
    return start;
}
const mergedListHead = list1.mergeTwoLists(list1.head, list2.head);
console.log("Merged List Head:", JSON.stringify(mergedListHead));