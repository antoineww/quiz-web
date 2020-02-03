import React from "react";
import { getQuizProgess } from "../../../helpers/common";
import { BooleanButtonsSection } from "./booleanButtonsSection";
import { QuizNotFound } from "./quizNotFound";

export const QuizContent = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;

  if (!Array.isArray(questionsWithAnswers) || questionsWithAnswers.length < 1)
    return <QuizNotFound />;

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
    <div className="quiz-content">
      <h1>{currentQuestion.category}</h1>
      <div className="box">
        <h2 className="question">{currentQuestion.question}</h2>
        {booleanButtonsSection}
      </div>
      <p>{quizProgress}</p>
    </div>
  );
};
