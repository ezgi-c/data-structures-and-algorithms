'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  includes(value) {
    if (!this.head) return false;
    let current = this.head;
    while (current !== null) {
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let string = '';
    let current = this.head;
    while (current !== null) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

module.exports = LinkedList;
