import React, { useState } from "react";

import { QUIZ_STAGES } from "./../resources/constants";
import Home from "./../screens/home";
import Quiz from "./../screens/quiz";
import Results from "./../screens/results";

const defaultState = {
  stage: QUIZ_STAGES.HOME,
  timeStart: null,
  timeEnd: null,
  questions: []
};

const routes = (props = {}) => {
  const [stateQuiz, setStateQuiz] = useState(defaultState);

  const { stage } = stateQuiz;

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

export default routes;
