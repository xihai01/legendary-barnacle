const { compareSentence } = require("./compareSentence");

/**
 * sorts each sentence in array using selection sort
 * @param {[]} data
 * @returns array of sorted sentences
 */
const sort = function (data) {
  // make a copy of the data
  const output = [...data];

  for (let top = output.length - 1; top > 0; top--) {
    // keep track of sentence that is highest in alphabetical order
    let highest = 0;
    for (let i = 1; i <= top; i++) {
      // the index of sentence with highest alphabetical order is recorded
      if (compareSentence(output[i], output[highest])) {
        highest = i;
      }
    }
    // place highest sentence at end of array
    const temp = output[top];
    output[top] = output[highest];
    output[highest] = temp;
  }

  return output;
};

module.exports = { sort };
