const { Queue } = require('../stack-and-queue/queue');

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
    this.pets = new Queue();
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.cats.enqueue(animal);
      this.pets.enqueue(animal);
    } else if (animal === 'dog') {
      this.dogs.enqueue(animal);
      this.pets.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      return this.cats.dequeue();
    } else if (pref === 'dog') {
      return this.dogs.dequeue();
    } else if (!pref) {
      return this.pets.dequeue();
    }
  }
}

module.exports = { AnimalShelter };
