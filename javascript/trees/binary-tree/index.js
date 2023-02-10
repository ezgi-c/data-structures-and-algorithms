class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // root - left - right
  // time O(n)
  // space O(h)
  preOrder() {
    let values = [];
    const _traverse = (node) => {
      values.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return values;
  }

  // left -  root - right
  inOrder() {
    let values = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      values.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return values;
  }

  // left - right - root
  postOrder() {
    let values = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      values.push(node.value);
    };
    _traverse(this.root);
    return values;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      // traverse the bst - currentNode, newNode
      _traverse(this.root, newNode);
    }

    function _traverse(current, newNode) {
      if (newNode.value < current.value) {
        if (current.left) _traverse(current.left, newNode);
        else current.left = newNode;
      }
      if (newNode.value > current.value) {
        if (current.right) _traverse(current.right, newNode);
        else current.right = newNode;
      }
      return;
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}


module.exports = { BinaryTree, BinarySearchTree, Node };
