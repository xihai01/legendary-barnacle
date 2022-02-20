//import functions to test
const { assert } = require("chai");
const { getStoryData } = require("../getStoryData");
const { parseSentence } = require("../parseSentence");
const { compareSentence } = require("../compareSentence");

const path = "./test/sample1.txt";
const mock = {
  story: {
    1: [
      "The primary purpose of assessment and evaluation is to improve student learning.",
      "\nInformation gathered through assessment helps teachers to determine students’ strengths and weaknesses in their achievement of the curriculum expectations.",
      "\nEvaluation refers to the process of judging the quality of student work on the basis of established criteria, and assigning a value to represent that quality.",
      "\nAssessments and evaluations are varied in nature, administered over a period of time, and designed to provide opportunities for students to demonstrate the full range of their learning.",
      "\nAll assessments and evaluations will be related to the learning activities used, correspond to the purposes of instruction, match the needs and experiences of the students, and be fair to all students.",
      "\nAs they are enrolled in a University Preparation level course, students of MCR3U can expect a majority of evaluations to be in test form.",
      "\nTest in this instance refers to evaluative tools designed to assess the pupils' ability to think mathematically and to explain their thinking, with an emphasis on 'explaining why', rather than just 'knowing how'.",
    ],
  },
};

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
});

describe("compare two simple sentences", () => {
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
});
