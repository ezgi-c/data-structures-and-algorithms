'use strict';

const { mergeSort } = require('./index');

describe('mergeSort', () => {
  test('empty input', () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });

  test('simplest input', () => {
    const arr = [1];
    expect(mergeSort(arr)).toEqual([1]);
  });

  test('smallest interesting case', () => {
    const arr = [1, 4, 3, 2];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4]);
  });
});
