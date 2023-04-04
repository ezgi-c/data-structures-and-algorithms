const { Graph } = require('./graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    const roomA = graph.add_node();
    const roomB = graph.add_node({key : 'blue'});
    const roomC = graph.add_node();
    const roomD = graph.add_node({treasure: true});

    expect(roomA.value).toBeUndefined();
    expect(roomB.value).toEqual({key : 'blue'});
    expect(roomC.value).toBeUndefined();
    expect(roomD.value).toEqual({treasure: true});
  });

  test('An edge can be successfully added to the graph', () => {
    const roomA = graph.add_node();
    const roomB = graph.add_node({key : 'blue'});
    // const roomC = graph.add_node();
    // const roomD = graph.add_node({treasure: true});

    const edge = graph.add_edge(roomA, roomB);
    expect(edge.from).toBe(roomA);
    expect(edge.to).toBe(roomB);

    graph.add_undirected_edge(roomA, roomB);
    // graph.add_undirected_edge(roomA, roomC);
    // graph.add_undirected_edge(roomC, roomD, { lock: 'blue'});
    expect(graph.get_edges(roomA)).toHaveLength(2);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const roomA = graph.add_node();
    const roomB = graph.add_node({key : 'blue'});
    const roomC = graph.add_node();

    graph.add_undirected_edge(roomA, roomB);
    graph.add_undirected_edge(roomA, roomC);

    expect(graph.get_neighbors(roomA)).toEqual([roomB, roomC]);
    expect(graph.get_neighbors(roomB)).toEqual([roomA]);
    expect(graph.get_neighbors(roomC)).toEqual([roomA]);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const roomA = graph.add_node();
    const roomB = graph.add_node({key : 'blue'});
    const roomC = graph.add_node();

    graph.add_undirected_edge(roomA, roomB);
    graph.add_undirected_edge(roomA, roomC);

    expect(graph.get_size()).toBe(3);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    const roomA = graph.add_node();
    const roomB = graph.add_node({key : 'blue'});

    graph.add_edge(roomA, roomB);

    // expect(graph.get_size()).toBe(2);
    expect(graph.get_edges(roomA)).toHaveLength(1);
    expect(graph.get_neighbors(roomA)).toEqual([roomB]);
  });
});
