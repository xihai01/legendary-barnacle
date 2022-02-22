// store sentences in array
const parseSentence = function (data) {
  // remove the "-----" seperators
  const regex = /-{5,}/gm;
  // remove any trailing whitespaces
  const story = data.trim().replace(regex, "");
  const output = [];
  let sentence = "";
  // loop through each sentence
  for (let i = 0; i < story.length; i++) {
    // remove double quotes and isngle quotes
    if (story[i] !== '"') {
      sentence += story[i];
    }
    // sentence terminating characters
    if (story[i] === "." || story[i] === "?" || story[i] === "!") {
      // remove any trailing whitepsaces; start new sentence on a newline
      output.push("\r" + sentence.trim());
      sentence = "";
    }
  }

  console.log(output);
  return output;
};

module.exports = { parseSentence };
