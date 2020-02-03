import React from "react";
import strings from "./../../../resources/strings";
import { ANSWER_TYPES } from "./../../../resources/constants";
import { applyAnswer } from "./../helpers";

export const BooleanButtonsSection = ({
  stateQuiz,
  setStateQuiz,
  questionCurrentIndex,
  questionsWithAnswers,
  currentQuestion
}) => {
  let section = null;

  // Only boolean available
  const questionTypeFound = ANSWER_TYPES[currentQuestion.type];

  if (questionTypeFound) {
    const answerQuestion = attempted_answer =>
      applyAnswer(
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        attempted_answer
      );

    const trueButton = (
      <button
        class="btn btn-true"
        onClick={() => answerQuestion(ANSWER_TYPES.boolean.True)}
      >
        {strings.quiz_true}
      </button>
    );

    const falseButton = (
      <button
        class="btn btn-false"
        onClick={() => answerQuestion(ANSWER_TYPES.boolean.False)}
      >
        {strings.quiz_false}
      </button>
    );

    section = (
      <div class="boolean-buttons-section">
        {trueButton} {falseButton}
      </div>
    );
  }

  return section;
};
