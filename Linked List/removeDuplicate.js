/*
Problem Statement:
Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
Return the linked list sorted as well.
*/

class Node {
    constructor(value) {
        this.value = value || 0;
        this.next = null;
    }
}
let node1 = new Node(10);
let node2 = new Node(10);
let node3 = new Node(20);
let node4 = new Node(20);
let node5 = new Node(30);



node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null; // End of the sorted linked list

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 5;

MyLinkedList.prototype.removeDuplicates = function (head) {
    if (!head) return null; // If the list is empty, return null
    let current = head;
    while (current && current.next) {
       if(current.value === current.next.value){
              current.next = current.next.next; // Skip the duplicate node
       }else{
                current = current.next; // Move to the next node
       }
    }
return head; // Return the updated list 
}
console.log(JSON.stringify(list.head)); // Output the original list
let removedList = list.removeDuplicates(list.head);
console.log(JSON.stringify(removedList)); // Output the list after removing duplicates

/*
Time and Space Complexity:
- Time Complexity: O(n)
- Space Complexity: O(1)
*/