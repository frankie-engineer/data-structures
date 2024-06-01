class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    this.length++;
    let newNode = new LinkedListNode(val, null);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(val) {
    this.length++;
    let newNode = new LinkedListNode(val, null);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  ifListEmptySetHeadAndTail(val, newNode) {
    if (!this.head) {
      this.head = newNode;
    }
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
