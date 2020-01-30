import React, { useState } from "react";

import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";
import Home from "./../screens/home";
import Quiz from "./../screens/quiz";
import Results from "./../screens/results";

const Routes = (props = {}) => {
  const [stateQuiz, setStateQuiz] = useState(DEFAULT_STATE_QUIZ);

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

export default Routes;
