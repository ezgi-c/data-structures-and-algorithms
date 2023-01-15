'use strict';

const PseudoQueue = require('../stack-queue-pseudo/pseudoQueue');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('Inserts a value into the PseudoQueue, using a first-in, first-out approach', () => {
    pseudoQueue.enqueue('yellow');
    pseudoQueue.enqueue('blue');
    pseudoQueue.enqueue('purple');
    expect(pseudoQueue.inbox.top.value).toBe('purple');
  });

  it('Extracts the expected value from the PseudoQueue, using a first-in, first-out approach', () => {
    pseudoQueue.enqueue('yellow');
    pseudoQueue.enqueue('blue');
    pseudoQueue.enqueue('purple');

    let value = pseudoQueue.dequeue();
    expect(value).toBe('yellow');
  });
});
