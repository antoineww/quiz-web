import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";

// USES React Hook values

// Go fresh Quiz Screen
export const beginQuiz = (setStateQuiz = () => {}) => {
  setStateQuiz({
    ...DEFAULT_STATE_QUIZ,
    stage: QUIZ_STAGES.IN_QUIZ,
    startNew: true
  });
};

// Go To Results Screenn
export const quitQuiz = (stateQuiz = {}, setStateQuiz = () => {}) =>
  setStateQuiz({
    ...stateQuiz,
    stage: QUIZ_STAGES.RESULTS
  });

// Go To Home Screen
export const exitQuiz = (setStateQuiz = () => {}) =>
  setStateQuiz({
    stage: QUIZ_STAGES.HOME
  });
