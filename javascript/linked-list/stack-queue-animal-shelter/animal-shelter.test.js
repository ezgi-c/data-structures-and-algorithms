'use strict';

const { AnimalShelter } = require('./index');

describe('class AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('can enqueue cats and dogs', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.cats.front.value).toBe('cat');
    expect(shelter.dogs.front.value).toBe('dog');
    expect(shelter.pets.front.value).toBe('cat');
  });

  test('can dequeue based on preference', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.dequeue('cat')).toBe('cat');
    expect(shelter.dequeue('dog')).toBe('dog');
  });

  test('can dequeue pets with no preference', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.dequeue()).toBe('cat');
    expect(shelter.dequeue()).toBe('dog');
  });
});
