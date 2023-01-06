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

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
      return;
    }
    while (current.next !== null) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
  kthFromEnd(k) {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    while (k <= arr.length) {
      return arr[arr.length - 1 - k];
    }
  }
}

function zipLists(list1, list2) {
  let outputList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  while (current1 || current2) {
    if (current1) {
      outputList.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      outputList.append(current2.value);
      current2 = current2.next;
    }
  }
  return outputList;
}

module.exports = { LinkedList, zipLists };
