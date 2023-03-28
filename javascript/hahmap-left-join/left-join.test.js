const { left_join } = require('.');

describe('left_join', () => {
  test('returns a new data structure with matching synonyms and antonyms, includes null for missing antonyms', () => {
    let synonyms = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
    };
    let antonyms = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
    };

    let output = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
    ];

    expect(left_join(synonyms, antonyms)).toEqual(output);
  });
});
