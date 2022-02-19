//import functions to test
const { assert } = require("chai");
const { getStoryData } = require("../getStoryData");
// import index from "../index";

const path = "./test/ShortStory.txt";

describe("read from file", () => {
  it("should read successfully", (done) => {
    // dut === function to read file
    // input === filepath
    // output === data || error
    getStoryData(path)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
