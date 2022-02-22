// helper functions
const { getStoryData, writeStoryData } = require("./fileOperations");
const { parseSentence } = require("./parseSentence");
const { sort } = require("./sort");

// load path to .txt
const path = "./data/ShortStory.txt";
const result = "./data/result/ShortStory.txt";

const index = function (path) {
  // read .txt
  getStoryData(path)
    .then((data) => {
      // parse the data
      const parsedData = parseSentence(data);
      // sort alphabetically
      const sortedData = sort(parsedData);
      // write to file
      writeStoryData(result, sortedData.join(""));
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
};

// program starts
index(path);
