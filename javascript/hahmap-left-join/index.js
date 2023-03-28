function left_join(synonyms, antonyms) {
  let output = [];

  for (let key in synonyms) {
    if (antonyms[key]) {
      output.push([key, synonyms[key], antonyms[key]]);
    } else {
      output.push([key, synonyms[key], null]);
    }
  }

  return output;
}

module.exports = { left_join };
