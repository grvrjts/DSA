class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(20);
let node5 = new Node(10);



node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null; // Creates a palindrome in the list

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 5;

MyLinkedList.prototype.isPalindrome = function () {
    // find the middle of linked list.
    let slow = fast = this.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the list
    let prev = null;
    let curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp

    }
    // check for palindrome
    let firstList = this.head;
    let secondList = prev;
    while (secondList) {
        if (secondList.value !== firstList.value) {
            return false;
        }
        secondList = secondList.next;
        firstList = firstList.next;
    }
    return true;
}

let isPalindrome = list.isPalindrome(); // true
console.log("Is the linked list a palindrome?", isPalindrome);

/**
Time and Space Complexity:
Time Complexity: O(n), where n is the number of nodes.
Space Complexity: O(n), for the array storage.
 */