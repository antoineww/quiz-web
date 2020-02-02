import React, { useEffect } from "react";

import strings from "./../../resources/strings";
import { getQuizProgess } from "./../../helpers/common";

import { BooleanButtonsSection } from "./components";
import { onQuestionAnswered } from "./helpers";
import { quitQuiz } from "./../../helpers/hooks";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const {
    questionsWithAnswers,
    questionCurrentIndex,
    goToQuestion
  } = stateQuiz;
  const currentQuestion = questionsWithAnswers[questionCurrentIndex];

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => onQuestionAnswered(stateQuiz, setStateQuiz), [goToQuestion]);
  /* eslint-enable */

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
      <div class="box">
        <h2 class="question">{currentQuestion.question}</h2>
        {booleanButtonsSection}
      </div>
      <p>{quizProgress}</p>
      <div class="footer">
        <button
          class="btn btn-exit"
          onClick={() => quitQuiz(stateQuiz, setStateQuiz)}
        >
          {strings.quiz_quit}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
