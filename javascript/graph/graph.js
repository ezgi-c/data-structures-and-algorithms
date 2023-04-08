class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.edges = new Map();
  }

  add_node(value) {
    const node = new Node(value);
    return node;
  }

  add_edge(from, to, value) {
    const edge = new Edge(from, to, value);
    const edges = this.edges.get(from) ? this.edges.get(from) : [];
    edges.push(edge);
    this.edges.set(from, edges);
    return edge;
  }

  add_undirected_edge(a, b, value) {
    this.add_edge(a, b, value);
    this.add_edge(b, a, value);
  }

  get_neighbors(node) {
    // Neighbors are the other ends of the edges
    const edges = this.get_edges(node);

    return edges.map((edge) => edge.to);
  }

  get_edges(node) {
    // all edges where from is node
    return this.edges.get(node);
  }

  get_nodes() {
    return Array.from(this.edges.keys());
  }

  get_size() {
    return Array.from(this.edges.keys()).length;
  }

  breadthFirst(startNode) {
    let traversal = [];
    let visited = new Set();
    let todo = [startNode];

    while (todo.length > 0) {
      let current = todo.shift();
      if (!visited.has(current)) {
        traversal.push(current);
        visited.add(current);
        const neighbors = this.get_neighbors(current);
        neighbors.forEach((neighbor) => todo.push(neighbor));
      }
    }
    return traversal;
  }
}

module.exports = { Graph, Node, Edge };
