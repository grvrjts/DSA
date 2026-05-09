function Node(value) {
    this.value = value;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}
MyLinkedList.prototype.addToHead  = function(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value);
    this.size++; 

    if (!this.head) {
        this.head = newNode;
        return;
    }

    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
};

MyLinkedList.prototype.addAtIndex = function (index, value) {
      if (index < 0 || index >= this.size) {
        return; 
    }
    let newNode = new Node(value);
    if (index == 0) {
        this.addToHead(value);
        return;
    }
    else if (index == this.size) {
        this.addToTail(value);
        return;
    } else {
        this.size++; // Keep the counter accurate!
        let i = 0;
        let current = this.head;
        while (i < index - 1) {
            current = current.next;
            i++;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
};
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return; 
    }
    if (index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let current = this.head;
    let i = 0;
    while (i < index - 1) {
        current = current.next;
        i++;
    }
    current.next = current.next.next;
    this.size--;

};
MyLinkedList.prototype.getValueAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return -1; 
    }
    let i = 0;
    let current = this.head;
    while (i < index) {
        current = current.next;
        i++;
    }
    return current.value;
};

MyLinkedList.prototype.getMiddleNode = function () {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

MyLinkedList.prototype.printList = function() {
    let current = this.head;
    let result = "";

    while (current) {
        result += current.value + " -> ";
        current = current.next; // Move to the next node
    }

    console.log(result + "null");
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
node1.next = node2;
node2.next = node3;

let list = new MyLinkedList();

list.head = node1;
list.size = 3;
list.addToHead(25);
list.addToTail(100);
list.printList();
console.log("List size:", list.size);
list.addAtIndex(2, 50);
list.printList();
console.log("List size:", list.size);
list.deleteAtIndex(3);
console.log("List size after deletion at index 3:", list.size);
list.printList();
list.deleteAtIndex(0);
console.log("List size after deletion at index 0 head case:", list.size);
list.printList();
list.deleteAtIndex(3);
console.log("List size after deletion at index 3 tail case :", list.size);
list.printList();
let result = list.getValueAtIndex(2);
console.log("Value at index 2:", result);
let middleValue = list.getMiddleNode();
console.log("Middle value of the list is:", middleValue);
