import React from "react";

import strings from "./../resources/strings";
import { QUIZ_STAGES } from "./../resources/constants";
import { getQuizProgess } from "./../helpers/common";

const Quiz = (props = {}) => {
  console.log(props);
  const { stateQuiz, setStateQuiz } = props;

  const quitQuiz = () =>
    setStateQuiz({
      ...stateQuiz,
      stage: QUIZ_STAGES.RESULTS
    });

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;

  const quizProgress = getQuizProgess(
    questionCurrentIndex,
    questionsWithAnswers
  );

  const currentQuestion = questionsWithAnswers[questionCurrentIndex];

  return (
    <div class="container quiz">
      <h1>{currentQuestion.category}</h1>
      <div id="box">
        <h2 id="question">{currentQuestion.question}</h2>
        <button class="button">{strings.quiz_true}</button>
        <button class="button">{strings.quiz_false}</button>
      </div>
      <p>{quizProgress}</p>
      <button class="button" onClick={() => quitQuiz()}>
        {strings.quiz_quit}
      </button>
    </div>
  );
};

export default Quiz;
