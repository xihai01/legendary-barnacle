/**
 * filter any special letters in sentences
 * @param {string} string
 * @returns
 */
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

  for (let i = 0; i < string.length; i++) {
    if (!filter[string[i]]) {
      // captalize letter
      const letter = string[i];
      // when making comparisons, compare uppercase
      sentence.push(letter.toUpperCase());
    }
  }

  return sentence;
};

module.exports = { filterLetters };
