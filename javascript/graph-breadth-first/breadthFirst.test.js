// const { breadthFirst } = require('.');
const { Graph } = require('../graph/graph');

test('breadthFirst returns the correct traversal starting at bathroom', () => {
  const graph = new Graph();
  const hallway = graph.add_node();
  const kitchen = graph.add_node();
  const livingRoom = graph.add_node();
  const childRoom = graph.add_node();
  const bathroom = graph.add_node();
  const parentRoom = graph.add_node();
  const garage = graph.add_node();

  graph.add_undirected_edge(hallway, kitchen);
  graph.add_undirected_edge(hallway, livingRoom);
  graph.add_undirected_edge(hallway, childRoom);
  graph.add_undirected_edge(hallway, bathroom);
  graph.add_undirected_edge(hallway, parentRoom);
  graph.add_undirected_edge(hallway, garage);
  graph.add_undirected_edge(kitchen, livingRoom);
  graph.add_undirected_edge(childRoom, bathroom);
  graph.add_undirected_edge(bathroom, parentRoom);

  const traversal = graph.breadthFirst(bathroom);
  expect(traversal).toEqual([
    bathroom,
    parentRoom,
    hallway,
    childRoom,
    kitchen,
    livingRoom,
    garage,
  ]);
});
