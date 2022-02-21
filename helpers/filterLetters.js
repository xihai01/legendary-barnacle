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
  };
  const sentence = [];

  for (let i = 0; i < string.length; i++) {
    if (!filter[string[i]]) {
      sentence.push(string[i]);
    }
  }

  return sentence;
};

module.exports = { filterLetters };
