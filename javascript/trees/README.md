# Trees
<!-- Short summary or background information -->
Implementation of Binary Tree and Binary Search Tree

## Challenge
<!-- Description of the challenge -->
### Node

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- Create a Binary Tree class
- Define a method for each of the depth first traversals
- Each depth first traversal method should return an array of values, ordered appropriately.

### Binary Search Tree

- Create a Binary Search Tree class
- This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with additional methods

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Big O space: O(h)
Big O time: O(n)

## API
<!-- Description of each method publicly available in each of your trees -->
### Binary Tree methods

- pre order
- in order
- post order

### Binary Search Tree methods

- Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.
- Contains
  - Argument: value
  - Returns: boolean indicating whether or not the value is in the tree at least once.
