class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top = null;
  }
}

module.exports = { Stack };
