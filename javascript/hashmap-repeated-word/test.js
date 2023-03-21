const { repeatedWord } = require('./index');


test('returns repeated word', () => {
  const input = 'Once upon a time, there was a brave princess who lived in a beautiful castle.';
  const output = repeatedWord(input);
  expect(output).toBe('a');
});

test('returns null for string with no repeated words', () => {
  const input = 'Once upon a time, there was';
  const output = repeatedWord(input);
  expect(output).toBeNull();
});
