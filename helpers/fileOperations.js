const fs = require("fs");

// read contents of file
async function getStoryData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

// write contents of file
const writeStoryData = function (path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.log("Error occured writing to file", err);
      return;
    }
    console.log("File written successfully!");
    return;
  });
};

module.exports = { getStoryData, writeStoryData };
