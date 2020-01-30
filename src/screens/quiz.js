import React from "react";

import strings from "./../resources/strings";
import { QUIZ_STAGES } from "./../resources/constants";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const quitQuiz = () =>
    setStateQuiz({
      stage: QUIZ_STAGES.HOME
    });

  return (
    <div class="container quiz">
      <h1>{strings.quiz_header}</h1>
      <div id="box">
        <h2 id="question">{strings.quiz_mock_question}</h2>
        <button class="button">{strings.quiz_true}</button>
        <button class="button">{strings.quiz_false}</button>
      </div>
      <p>1 of 10</p>
      <button class="button" onClick={() => quitQuiz()}>
        {strings.quiz_quit}
      </button>
    </div>
  );
};

export default Quiz;
