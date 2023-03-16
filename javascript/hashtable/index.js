class Hashtable {
  constructor() {
    this.table= new Array(3);
    this.size=0;
  }

  hash(key) {
    let hash = 1;
    for (let i = 0; i < key.length; i++) {
      const c = key.charCodeAt(i);
      hash = (hash+c)*1;
    }
    return hash % this.table.length;
    // modulo - % divide and return remainder
  }
  // time O(n)

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      // Bucket is empty, create a new linked list with the key-value pair
      this.table[index] = [{key, value}];
    } else {
      // Bucket already contains some key-value pairs, find the node with the same key
      let node = bucket.find(node => node.key === key);
      if (node) {
        // Key already exists, replace its value
        node.value = value;
      } else {
        // Key doesn't exist, append the new key-value pair to the end of the linked list
        bucket.push({key, value});
      }
    }
    this.size++;
    console.log(index);
  }

  get(key) {
    if (!this.has(key)) {
      // Key doesn't exist in the hash table
      return undefined;
    }
    const index = this.hash(key);
    const bucket = this.table[index];
    const node = bucket.find(node => node.key === key);
    // Key exists, return its value
    return node.value;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      // Bucket is empty, key doesn't exist in the hash table
      return false;
    }
    if (bucket[0].key === key) {
      // Key exists in the first node of the linked list
      return true;
    }
    const node = bucket.find(node => node.key === key);
    if (node) {
      // Key exists in the linked list
      return true;
    }
    // Key doesn't exist in the linked list
    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          const key = bucket[j].key;
          keys.push(key);
        }
      }
    }
    return keys;
  }
}

module.exports = { Hashtable };
