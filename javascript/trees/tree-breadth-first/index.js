function breadthFirst(tree) {
  let queue = [tree];
  let output = [];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    output.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return output;
}

module.exports = { breadthFirst };
