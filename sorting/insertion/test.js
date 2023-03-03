'use strict';

const { insertionSort } = require('./index');

describe('insertionSort', () => {
  test('empty input', () => {
    const arr = [];
    expect(insertionSort(arr)).toEqual([]);
  });

  test('simplest input', () => {
    const arr = [1];
    expect(insertionSort(arr)).toEqual([1]);
  });

  test('smallest interesting case', () => {
    const arr = [2, 3, 1];
    expect(insertionSort(arr)).toEqual([1, 2, 3]);
  });
});
