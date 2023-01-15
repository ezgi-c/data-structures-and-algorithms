const { Stack } = require('../stack-and-queue/stack');

class PseudoQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue() {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }
    if (this.outbox.isEmpty()) {
      throw new Error('queue is empty');
    }
    return this.outbox.pop();
  }
}

module.exports = PseudoQueue;
