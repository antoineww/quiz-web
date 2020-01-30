export const QUIZ_STAGES = {
  HOME: "HOME",
  IN_QUIZ: "IN_QUIZ",
  RESULTS: "RESULTS"
};

export const DEFAULT_STATE_QUIZ = {
  stage: QUIZ_STAGES.HOME,
  timeStart: null,
  timeEnd: null,
  questionsWithAnswers: [],
  questionCurrentIndex: 0
};
