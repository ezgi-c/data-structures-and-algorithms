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
    return new Node(value);
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

  // need to fix this. this doesnt return the 'to' nodes
  get_nodes() {
    return Array.from(this.edges.keys());
  }

  // same as above
  get_size() {
    return Array.from(this.edges.keys()).length;
  }
}

module.exports = { Graph, Node, Edge };
