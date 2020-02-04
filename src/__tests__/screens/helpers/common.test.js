import {
  getQuizProgess,
  getQuizScore,
  ensureCriticalQuestionProperties,
  makeAQuizQuestion
} from "../../../helpers/common";

describe("function 'getQuizProgess' returns string of progress", () => {
  it("when invoked with undefined", () => {
    expect(getQuizProgess()).toEqual("0 of 0");
  });

  it("when invoked with values", () => {
    expect(getQuizProgess(1, [0, 1, 2])).toEqual("2 of 3");
  });

  it("when invoked with values - bad", () => {
    expect(getQuizProgess(4)).toEqual("5 of 0");
    expect(getQuizProgess(undefined, [0, 1, 2])).toEqual("0 of 3");
    expect(getQuizProgess(4, [0, 1, 2])).toEqual("5 of 3");
  });
});

describe("function 'getQuizScore' returns object of score values", () => {
  it("when invoked with undefined", () => {
    expect(getQuizScore()).toEqual({ fraction: "0 / 0", percentage: 0 });
  });

  it("when invoked with values", () => {
    const questionsWithAnswers1 = [
      { is_correct: true },
      { is_correct: true },
      { is_correct: true }
    ];

    const questionsWithAnswers2 = [
      { is_correct: true },
      { is_correct: false },
      { is_correct: null }
    ];

    expect(getQuizScore(questionsWithAnswers1)).toEqual({
      fraction: "3 / 3",
      percentage: 100
    });

    expect(getQuizScore(questionsWithAnswers2)).toEqual({
      fraction: "1 / 3",
      percentage: 33
    });
  });
});

describe("function 'ensureCriticalQuestionProperties' returns object with certain properties that are overwritten with defaults", () => {
  it("when invoked with undefined", () => {
    expect(ensureCriticalQuestionProperties()).toEqual({
      correct_answer: "True",
      incorrect_answers: ["False"],
      attempted_answer: null,
      is_correct: null
    });
  });

  it("when invoked with values", () => {
    expect(
      ensureCriticalQuestionProperties({
        incorrect_answers: ["poiuytr"],
        attempted_answer: "mnbvc",
        is_correct: "23456789"
      })
    ).toEqual({
      correct_answer: "True",
      incorrect_answers: ["False"],
      attempted_answer: null,
      is_correct: null
    });
  });
});

describe("function 'makeAQuizQuestion' returns object for questionWithAnswer ready for new quiz", () => {
  it("when invoked with undefined", () => {
    expect(makeAQuizQuestion()).toEqual({
      category: "TOPIC: UNKNOWN",
      question: "BAD QUESTION?",
      type: "boolean",
      correct_answer: "True",
      incorrect_answers: ["False"],
      attempted_answer: null,
      is_correct: null
    });
  });

  it("when invoked with values", () => {
    expect(
      ensureCriticalQuestionProperties({
        category: "TOPIC: TESTING",
        question: "GOOD QUESTION?",
        type: "boolean",
        correct_answer: "True",
        incorrect_answers: ["False"],
        attempted_answer: "True",
        is_correct: "True"
      })
    ).toEqual({
      category: "TOPIC: TESTING",
      question: "GOOD QUESTION?",
      type: "boolean",
      correct_answer: "True",
      incorrect_answers: ["False"],
      attempted_answer: null,
      is_correct: null
    });
  });
});
