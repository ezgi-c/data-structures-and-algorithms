'use strict';

const { breadthFirst } = require('./index');

describe('breadthFirst function', () => {
  test('shoud return correct list of values in breadth-first order', () => {
    let tree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: {
          value: 6,
          left: null,
          right: null
        }
      }
    };
    expect(breadthFirst(tree)).toEqual([1,2,3,4,5,6]);
  });
});
