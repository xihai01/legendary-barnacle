// helper functions
const { getStoryData, writeStoryData } = require("./helpers/fileOperations");
const { parseSentence } = require("./helpers/parseSentence");
const { sort } = require("./helpers/sort");

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
