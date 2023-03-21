function repeatedWord(string) {
  const words = string.split(' ');
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      return word;
    }
  }

  return null;
}

module.exports = { repeatedWord };
