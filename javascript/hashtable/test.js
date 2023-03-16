const { Hashtable } = require('./index');

describe('Hashtable', () => {
  let hashtable = new Hashtable();

  describe('set', () => {
    it('should add a key/value pair to the hashtable', () => {
      hashtable.set('Ezgi', 34);
      expect(hashtable.size).toBe(1);
    });

    it('should replace the value for an existing key', () => {
      hashtable.set('Ezgi', 34);
      hashtable.set('Ezgi', 35);

      expect(hashtable.get('Ezgi')).toEqual(35);
    });
  });

  describe('get', () => {
    it('should return the value associated with a key', () => {
      hashtable.set('Ezgi', 34);
      hashtable.set('Jane', 25);

      expect(hashtable.get('Ezgi')).toBe(34);
      expect(hashtable.get('Jane')).toBe(25);
    });

    it('should return undefined for a non-existent key', () => {
      expect(hashtable.get('Joe')).toBeUndefined();
    });
  });

  describe('has', () => {
    it('should return true if the key exists in the hashtable', () => {
      hashtable.set('Ezgi', 34);

      expect(hashtable.has('Ezgi')).toBe(true);
    });

    it('should return false if the key does not exist in the hashtable', () => {
      expect(hashtable.has('Joe')).toBe(false);
    });
  });

  // describe('keys', ()=> {
  //   it('should return a list of all unique keys that exist in the hashtable', () => {
  //     hashtable.set('Ezgi', 34);
  //     hashtable.set('Miriam', 55);
  //     hashtable.set('Jane', 25);
  //     hashtable.set('Joe', 38);

  //     expect(hashtable.keys()).toEqual(['Ezgi', 'Jane', 'Joe', 'Miriam']);
  //   });
  // });
});

