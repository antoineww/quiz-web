import React, { useState, useEffect } from "react";

import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";
import Home from "./../screens/home";
import Quiz from "./../screens/quiz";
import Results from "./../screens/results";
import {
  canPrepareQuestionsForNewQuiz,
  canSupplyFreshQuestions
} from "./helpers";

const ScreenRouter = (props = {}) => {
  const [stateQuiz, setStateQuiz] = useState(DEFAULT_STATE_QUIZ);

  const { stage, startNew, getFreshQuestions } = stateQuiz;

  /* eslint-disable react-hooks/exhaustive-deps */

  // onClick Begin Button - copy fresh questions for quiz
  useEffect(
    () => canPrepareQuestionsForNewQuiz(stateQuiz, setStateQuiz, props),
    [startNew]
  );

  // onNavigation to Home Screen - Load new questions
  useEffect(() => canSupplyFreshQuestions(stateQuiz, setStateQuiz, props), [
    getFreshQuestions
  ]);
  /* eslint-enable */

  const newProps = { ...props, stateQuiz, setStateQuiz };

  switch (stage) {
    case QUIZ_STAGES.IN_QUIZ:
      return <Quiz {...newProps} />;
    case QUIZ_STAGES.RESULTS:
      return <Results {...newProps} />;
    default:
      return <Home {...newProps} />;
  }
};

export default ScreenRouter;
