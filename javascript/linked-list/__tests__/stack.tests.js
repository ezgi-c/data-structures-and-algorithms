'use strict';

const { Stack } = require('../stack-and-queue/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Can successfully push onto a stack', () => {
    stack.push('purple');
    expect(stack.top.value).toBe('purple');
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push('purple');
    stack.push('blue');
    expect(stack.top.value).toBe('blue');
    expect(stack.top.next.value).toBe('purple');
  });

  it('Can successfully pop off the stack', () => {
    stack.push('purple');
    stack.push('blue');
    expect(stack.pop()).toBe('blue');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stack.push('purple');
    stack.push('blue');
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push('purple');
    stack.push('blue');
    expect(stack.peek()).toBe('blue');
  });

  it('Can successfully instantiate an empty stack', () => {
    expect(stack.top).toBeNull();
  });

  it('raises exception when pop or peek is called on empty stack ', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});
