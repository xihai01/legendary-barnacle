//import functions to test
const { assert } = require("chai");
const { getStoryData } = require("../fileOperations");
const { parseSentence } = require("../parseSentence");
const { compareSentence } = require("../compareSentence");
const { sort } = require("../sort");
const { mock } = require("./mock/mockData");

// easy story to test
const path = "./test/mock/sample1.txt";
// complex story to test
const path2 = "./test/mock/sample2.txt";
// story with two passages separated by -------
const path3 = "./test/mock/sample3.txt";

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

describe("array with sentences", () => {
  it("should parse simple sentences", (done) => {
    // dut === parser
    // input === data
    // output === array of sentences
    getStoryData(path)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        const result = parseSentence(data);
        assert.isArray(result);
        assert.deepEqual(mock.story[1], result);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should parse complex sentences", (done) => {
    // dut === parser
    // input === data
    // output === array of sentences
    getStoryData(path2)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        const result = parseSentence(data);
        assert.isArray(result);
        assert.deepEqual(mock.story[2], result);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should parse two passages seperated with ------", (done) => {
    // dut === parser
    // input === data
    // output === array of sentences
    getStoryData(path3)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        const result = parseSentence(data);
        assert.isArray(result);
        assert.deepEqual(mock.story[3], result);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("compare two sentences", () => {
  it("should compare two easy sentences", () => {
    // dut === compare sentences
    // input === current sentence, greatest sentence
    // output === true || false
    const string1 =
      "Information gathered through assessment helps teachers to determine students’ strengths and weaknesses in their achievement of the curriculum expectations.";
    const string2 =
      "As they are enrolled in a University Preparation level course, students of MCR3U can expect a majority of evaluations to be in test form.";
    // return true if string1 > string2
    assert.strictEqual(compareSentence(string1, string2), true);
    // return false if string1 < string2
    assert.strictEqual(compareSentence(string2, string1), false);
  });

  it("should compare two slightly complex sentences", () => {
    // dut === compare sentences
    // input === current sentence, greatest sentence
    // output === true || false
    const string1 =
      "Ast hey gathered through assessment helps teachers to determine students’ strengths and weaknesses in their achievement of the curriculum expectations.";
    const string2 =
      "As they are enrolled in a University Preparation level course, students of MCR3U can expect a majority of evaluations to be in test form.";
    // return true if string1 > string2
    assert.strictEqual(compareSentence(string1, string2), true);
    // return false if string1 < string2
    assert.strictEqual(compareSentence(string2, string1), false);
  });

  it("should compare two complex sentences with special letters", () => {
    const string1 =
      "Man's last mind paused before fusion, looking over a space that included nothing but the dregs of one last dark star and nothing besides but incredibly thin matter, agitated randomly by the tag ends of heat wearing out, asymptotically, to the absolute zero.";
    const string2 =
      "Man's last mind fused and only AC existed -- and that in hyperspace.";
    assert.strictEqual(compareSentence(string1, string2), true);
    assert.strictEqual(compareSentence(string2, string1), false);
  });
});

describe("sort sentences alphabetically", () => {
  it("should sort a simple passage alphabetically", (done) => {
    // dut === sort
    // input === data (array)
    // output === sorted data (array for now)
    getStoryData(path)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        const parsed = parseSentence(data);
        const result = sort(parsed);
        assert.isArray(result);
        assert.deepEqual(mock.sortedStory[1], result);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should sort a complex passage alphabetically", (done) => {
    // dut === sort
    // input === data (array)
    // output === sorted data (array for now)
    getStoryData(path2)
      .then((data) => {
        assert.isOk("Data successfully loaded");
        const parsed = parseSentence(data);
        const result = sort(parsed);
        assert.isArray(result);
        assert.deepEqual(mock.sortedStory[2], result);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
