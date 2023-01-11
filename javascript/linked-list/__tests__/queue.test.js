'use strict';

const { Queue } = require('../stack-and-queue/queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('purple');
    expect(queue.front.value).toBe('purple');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('purple');
    queue.enqueue('blue');
    expect(queue.front.value).toBe('purple');
    expect(queue.back.value).toBe('blue');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue('purple');
    queue.enqueue('blue');
    expect(queue.dequeue()).toBe('purple');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('purple');
    queue.enqueue('blue');
    expect(queue.peek()).toBe('purple');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue('purple');
    queue.enqueue('blue');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('Can successfully instantiate an empty queue', () => {
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('raises exception when dequeue or peek is called on empty queue ', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
