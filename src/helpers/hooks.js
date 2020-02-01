import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";
import { makeAQuizQuestion } from "./../helpers/common";
import questionsData from "./../data/mock_questions";

// USES React Hook values

// Go fresh Quiz Screen
export const beginQuiz = (setStateQuiz = () => {}) => {
  // TODO: Remove mock data
  const { results } = questionsData;
  const questionsWithAnswers = results.map(question =>
    makeAQuizQuestion(question)
  );
  //

  setStateQuiz({
    ...DEFAULT_STATE_QUIZ,
    stage: QUIZ_STAGES.IN_QUIZ,
    questionsWithAnswers
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
