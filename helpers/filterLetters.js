// filter any special letters in sentences
const filterLetters = function (string) {
  // remove any special characters such as spaces
  const sentence = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      sentence.push(string[i]);
    }
  }

  return sentence;
};

module.exports = { filterLetters };
