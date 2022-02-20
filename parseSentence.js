// store sentences in array
const parseSentence = function (data) {
  // remove any trailing whitespaces
  const story = data.trim();
  const output = [];
  let sentence = "";
  // loop through each sentence
  for (let i = 0; i < story.length; i++) {
    sentence += story[i];
    // sentence terminating characters
    if (story[i] === ".") {
      output.push(sentence);
      sentence = "";
    }
  }
  return output;
};

module.exports = { parseSentence };
