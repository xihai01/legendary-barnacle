// filter any special letters in sentences
const filterLetters = function (string) {
  // remove any special characters in obj
  const filter = {
    " ": true,
    ".": true,
    "!": true,
    "?": true,
    "-": true,
    "'": true,
    ",": true,
    "(": true,
    ")": true,
    "\r": true,
    "\n": true,
  };
  const sentence = [];

  // when making comparisons, compare uppercase

  for (let i = 0; i < string.length; i++) {
    if (!filter[string[i]]) {
      // captalize letter
      const letter = string[i];
      sentence.push(letter.toUpperCase());
    }
  }

  return sentence;
};

module.exports = { filterLetters };
