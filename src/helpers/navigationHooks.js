import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "../resources/constants";

// USES React Hook values

// Load new questions
export const loadQuiz = (setStateQuiz = () => {}, autoStart = false) => {
  setStateQuiz({
    ...DEFAULT_STATE_QUIZ,
    getFreshQuestions: true,
    autoStart
  });
};

// Go to New Quiz Screen
export const beginQuiz = (setStateQuiz = () => {}) => {
  setStateQuiz({
    ...DEFAULT_STATE_QUIZ,
    stage: QUIZ_STAGES.IN_QUIZ,
    startNew: true
  });
};

// Go To Results Screen
export const quitQuiz = (stateQuiz = {}, setStateQuiz = () => {}) =>
  setStateQuiz({
    ...stateQuiz,
    stage: QUIZ_STAGES.RESULTS
  });

// Go To Home Screen
export const exitQuiz = (setStateQuiz = () => {}) =>
  setStateQuiz({
    stage: QUIZ_STAGES.HOME
    // getFreshQuestions: true // Load new questions on navigation to Home Screen
  });
