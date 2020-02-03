export const QUIZ_STAGES = {
  HOME: "HOME",
  IN_QUIZ: "IN_QUIZ",
  RESULTS: "RESULTS"
};

export const DEFAULT_QUESTION_WITH_ANSWER = {
  category: "TOPIC: UNKNOWN",
  type: "boolean",
  question: "BAD QUESTION?",
  correct_answer: "True",
  incorrect_answers: ["False"],

  attempted_answer: null,
  is_correct: null
};

export const ANSWER_TYPES = {
  boolean: {
    True: "True",
    False: "False"
  }
};

export const DEFAULT_STATE_QUIZ = {
  stage: QUIZ_STAGES.HOME,
  timeStart: null,
  timeEnd: null,
  questionsWithAnswers: [],
  questionCurrentIndex: 0,
  goToQuestion: 0,

  startNew: false,
  getFreshQuestions: false
};
