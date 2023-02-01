'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('./index');

describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(new Node(3));
    expect(tree.root.value).toEqual(3);
  });
});

describe('Binary Tree Traversals', () => {
  let tree;
  beforeEach(() => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    tree = new BinaryTree(root);
  });
  it('Can successfully return a collection from a pre-order traversal', () => {
    expect(tree.preOrder()).toEqual([1,2,3]);
  });
  it('Can successfully return a collection from a in-order traversal', () => {
    expect(tree.inOrder()).toEqual([2,1,3]);
  });
  it('Can successfully return a collection from a post-order traversal', () => {
    expect(tree.postOrder()).toEqual([2,3,1]);
  });
});


describe('Binary Search Tree', () => {
  let tree;
  beforeEach(()=> {
    tree = new BinarySearchTree();
  });

  it('can successfully add a left child and right child properly to a node', () => {
    tree.add(4);
    tree.add(2);
    tree.add(6);
    expect(tree.root.value).toEqual(4);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(6);
  });
  it('Returns true or false for the contains method, given an existing or non-existing node value', () => {
    tree.add(4);
    tree.add(2);
    tree.add(6);
    expect(tree.contains(2)).toBeTruthy();
    expect(tree.contains(8)).toBeFalsy();
  });
});
