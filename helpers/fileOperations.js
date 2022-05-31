const fs = require("fs");

/**
 * read contents of file
 * @param {*} path
 * @returns data or error
 */
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

/**
 * write contents to file path
 * @param {*} path
 * @param {*} content
 */
const writeStoryData = function (path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.log("Error occured writing to file", err);
      return;
    }
    console.log(
      "File written successfully! Check data/result folder for output."
    );
    return;
  });
};

module.exports = { getStoryData, writeStoryData };
