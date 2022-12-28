'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  let linkedList;

  it('works', () => {
    expect(true).toBeTruthy();
  });

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
  });

  it('can properly insert into the linked list', () => {
    linkedList.insert(8);
    expect(linkedList.head.value).toEqual(8);
  });

  it('the head property will properly point to the first node in the linked list', () => {
    linkedList.insert(8);
    expect(linkedList.head.value).toEqual(8);
    linkedList.insert(11);
    expect(linkedList.head.value).toEqual(11);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    linkedList.insert(8);
    linkedList.insert(11);
    linkedList.insert(7);
    expect(linkedList.toString()).toEqual('{ 7 } -> { 11 } -> { 8 } -> NULL');
  });

  it('will return true when finding a value within the linked list that exists', () => {
    linkedList.insert(8);
    linkedList.insert(11);
    linkedList.insert(7);
    expect(linkedList.includes(8)).toBeTruthy();
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    linkedList.insert(8);
    linkedList.insert(11);
    linkedList.insert(7);
    expect(linkedList.includes(10)).toBeFalsy();
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    linkedList.insert(8);
    linkedList.insert(11);
    linkedList.insert(7);
    expect(linkedList.toString()).toEqual('{ 7 } -> { 11 } -> { 8 } -> NULL');
  });

  // Code Challenge 6:

  it('can successfully add a node to the end of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next).toBeNull();
  });

  it('can successfully add multiple nodes to the end of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(2, 4);
    expect(linkedList.toString()).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 3 } -> NULL');
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertBefore(1, 3);
    expect(linkedList.toString()).toEqual('{ 3 } -> { 1 } -> { 2 } -> NULL');
  });

  it('can successfully insert after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(2, 4);
    expect(linkedList.toString()).toEqual('{ 1 } -> { 2 } -> { 4 } -> { 3 } -> NULL');
  });

});
