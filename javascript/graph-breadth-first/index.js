function breadthFirst(graph, startNode) {
  let traversal = [];
  let visited = {};
  let todo = [ startNode ];

  while (todo.length > 0) {
    let currentNode = todo.shift();
    if (!visited[currentNode]) {
      traversal.push(currentNode);
      visited[currentNode] = true;

      let neighbors = graph[currentNode];
      neighbors.forEach(neighbor => todo.push(neighbor));
    }
    return traversal;
  }
}


module.exports = { breadthFirst };
