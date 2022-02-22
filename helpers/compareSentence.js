const { filterLetters } = require("./filterLetters");

// compare two sentences
const compareSentence = function (string1, string2) {
  // remove any special characters such as spaces, ., !, ?, -, '
  const sentence1 = filterLetters(string1);
  const sentence2 = filterLetters(string2);

  // compare with the shortest sentence in length
  let length =
    sentence1.length > sentence2.length ? sentence2.length : sentence1.length;

  // compare letter by letter
  for (let i = 0; i < length; i++) {
    if (sentence1[i] < sentence2[i]) {
      return false;
    } else if (sentence1[i] > sentence2[i]) {
      return true;
    }
  }

  return true;
};

module.exports = { compareSentence };
