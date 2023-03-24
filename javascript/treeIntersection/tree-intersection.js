function tree_intersection(tree1, tree2) {
  let hashmap = new Map();
  let commonValues = new Set();

  traverse(tree1, (value) => {
    hashmap.set(value,1);
  });

  traverse(tree2, (value) => {
    if (!hashmap.has(value)) {
      hashmap.set(value,1);
    } else {
      commonValues.add(value);
    }
  });

  return commonValues;
}

function traverse(node, callback) {
  if (node !== null) {
    traverse(node.left, callback);
    callback(node.value);
    traverse(node.right, callback);
  }
}

module.exports = {tree_intersection};
