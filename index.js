// helper functions
import { getStoryData } from "./fileOperations";
import { parseSentence } from "./parseSentence";
import { sort } from "./sort";

// load path to .txt
const path = "./data/ShortStory.txt";

const index = function (path) {
  // read .txt
  getStoryData(path)
    .then((data) => {
      // parse the data
      const parsedData = parseSentence(data);
      // sort alphabetically
      const sortedData = sort(parsedData);
      // write to file
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
  return null;
};
