//import functions to test
const { assert } = require("chai");
const { getStoryData } = require("../getStoryData");
const { parseSentence } = require("../parseSentence");
const { compareSentence } = require("../compareSentence");
const { sort } = require("../sort");

// easy story to test
const path = "./test/sample1.txt";
// complex story to test
const path2 = "./test/sample2.txt";
// story with two passages separated by -------
const path3 = "./test/sample3.txt";

const mock = {
  story: {
    1: [
      "\rThe primary purpose of assessment and evaluation is to improve student learning.",
      "\rInformation gathered through assessment helps teachers to determine students’ strengths and weaknesses in their achievement of the curriculum expectations.",
      "\rEvaluation refers to the process of judging the quality of student work on the basis of established criteria, and assigning a value to represent that quality.",
      "\rAssessments and evaluations are varied in nature, administered over a period of time, and designed to provide opportunities for students to demonstrate the full range of their learning.",
      "\rAll assessments and evaluations will be related to the learning activities used, correspond to the purposes of instruction, match the needs and experiences of the students, and be fair to all students.",
      "\rAs they are enrolled in a University Preparation level course, students of MCR3U can expect a majority of evaluations to be in test form.",
      "\rTest in this instance refers to evaluative tools designed to assess the pupils' ability to think mathematically and to explain their thinking, with an emphasis on 'explaining why', rather than just 'knowing how'.",
    ],
    2: [
      "\rThe stars and Galaxies died and snuffed out, and space grew black after ten trillion years of running down.",
      "\rOne by one Man fused with AC, each physical body losing its mental identity in a manner that was somehow not a loss but a gain.",
      "\rMan's last mind paused before fusion, looking over a space that included nothing but the dregs of one last dark star and nothing besides but incredibly thin matter, agitated randomly by the tag ends of heat wearing out, asymptotically, to the absolute zero.",
      "\rMan said, AC, is this the end?",
      "\rCan this chaos not be reversed into the Universe once more?",
      "\rCan that not be done?",
      `\rAC said, THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER.`,
      `\rMan's last mind fused and only AC existed -- and that in hyperspace.`,
    ],
    3: [
      "\rI like pineapples on pizza.",
      "\rMe too, it's very delicious.",
      "\rFind and fiz application security bugs with every release.",
      "\rKaakaww!",
    ],
  },
  sortedStory: {
    1: [
      "\rAll assessments and evaluations will be related to the learning activities used, correspond to the purposes of instruction, match the needs and experiences of the students, and be fair to all students.",
      "\rAssessments and evaluations are varied in nature, administered over a period of time, and designed to provide opportunities for students to demonstrate the full range of their learning.",
      "\rAs they are enrolled in a University Preparation level course, students of MCR3U can expect a majority of evaluations to be in test form.",
      "\rEvaluation refers to the process of judging the quality of student work on the basis of established criteria, and assigning a value to represent that quality.",
      "\rInformation gathered through assessment helps teachers to determine students’ strengths and weaknesses in their achievement of the curriculum expectations.",
      "\rTest in this instance refers to evaluative tools designed to assess the pupils' ability to think mathematically and to explain their thinking, with an emphasis on 'explaining why', rather than just 'knowing how'.",
      "\rThe primary purpose of assessment and evaluation is to improve student learning.",
    ],
    2: [
      "\rAC said, THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER.",
      "\rCan that not be done?",
      "\rCan this chaos not be reversed into the Universe once more?",
      "\rMan said, AC, is this the end?",
      "\rMan's last mind fused and only AC existed -- and that in hyperspace.",
      "\rMan's last mind paused before fusion, looking over a space that included nothing but the dregs of one last dark star and nothing besides but incredibly thin matter, agitated randomly by the tag ends of heat wearing out, asymptotically, to the absolute zero.",
      "\rOne by one Man fused with AC, each physical body losing its mental identity in a manner that was somehow not a loss but a gain.",
      "\rThe stars and Galaxies died and snuffed out, and space grew black after ten trillion years of running down.",
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
