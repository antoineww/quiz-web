import React from "react";
import { getQuizProgess } from "./../../../helpers/common";
import { BooleanButtonsSection } from "./booleanButtonsSection";

export const QuizTop = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;

  if (!Array.isArray(questionsWithAnswers) || questionsWithAnswers.length < 1)
    return null;

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
    <div>
      <h1>{currentQuestion.category}</h1>
      <div class="box">
        <h2 class="question">{currentQuestion.question}</h2>
        {booleanButtonsSection}
      </div>
      <p>{quizProgress}</p>
    </div>
  );
};
