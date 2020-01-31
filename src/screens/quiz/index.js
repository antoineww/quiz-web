import React from "react";

import strings from "./../../resources/strings";
import { QUIZ_STAGES } from "./../../resources/constants";
import { getQuizProgess } from "./../../helpers/common";
import { BooleanButtonsSection } from "./components";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const quitQuiz = () =>
    setStateQuiz({
      ...stateQuiz,
      stage: QUIZ_STAGES.RESULTS
    });

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;
  const currentQuestion = questionsWithAnswers[questionCurrentIndex];

  const booleanButtonsSection = (
    <BooleanButtonsSection
      {...{
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        currentQuestion
      }}
    />
  );

  const quizProgress = getQuizProgess(
    questionCurrentIndex,
    questionsWithAnswers
  );

  return (
    <div class="container quiz">
      <h1>{currentQuestion.category}</h1>
      <div id="box">
        <h2 id="question">{currentQuestion.question}</h2>
        {booleanButtonsSection}
      </div>
      <p>{quizProgress}</p>
      <button class="button" onClick={() => quitQuiz()}>
        {strings.quiz_quit}
      </button>
    </div>
  );
};

export default Quiz;
