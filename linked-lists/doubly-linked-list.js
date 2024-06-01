class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    this.length++;
    let newNode = new DoublyLinkedListNode(val);
    this.ifListEmptySetHeadAndTail(val, newNode);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(val) {
    this.length++;
    let newNode = new DoublyLinkedListNode(val);
    this.ifListEmptySetHeadAndTail(val, newNode);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  ifListEmptySetHeadAndTail(val, newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }
    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
