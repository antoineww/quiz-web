import { QUIZ_STAGES } from "./../../resources/constants";

export const areStringsEqual = (
  answerA = "A",
  answerB = "B",
  ignoreCase = true
) => {
  if (ignoreCase) return answerA.toUpperCase() === answerB.toUpperCase();
  return answerA === answerB;
};

export const applyAnswer = (
  stateQuiz = {},
  setStateQuiz = () => {},
  questionCurrentIndex = 0,
  givenQuestionsWithAnswers = [{}],
  attempted_answer = null
) => {
  const questionsWithAnswers = givenQuestionsWithAnswers.map(
    (questionWithAnswer, index) => {
      const updatedQuestionWithAnswer = { ...questionWithAnswer };

      if (index === questionCurrentIndex) {
        updatedQuestionWithAnswer.attempted_answer = attempted_answer;
        const { correct_answer } = updatedQuestionWithAnswer;

        updatedQuestionWithAnswer.is_correct = areStringsEqual(
          correct_answer,
          attempted_answer
        );
      }

      return updatedQuestionWithAnswer;
    }
  );

  const goToQuestion = questionCurrentIndex + 1;

  setStateQuiz({ ...stateQuiz, questionsWithAnswers, goToQuestion });
};

export const onQuestionAnswered = (stateQuiz = {}, setStateQuiz = () => {}) => {
  const { questionsWithAnswers, goToQuestion } = stateQuiz;
  let { questionCurrentIndex } = stateQuiz;

  if (questionCurrentIndex === goToQuestion) return;

  if (
    questionCurrentIndex < goToQuestion &&
    goToQuestion < questionsWithAnswers.length
  ) {
    questionCurrentIndex = goToQuestion;

    setStateQuiz({
      ...stateQuiz,
      questionCurrentIndex
    });
  } else {
    // quiz is done
    setStateQuiz({
      ...stateQuiz,
      stage: QUIZ_STAGES.RESULTS
    });
  }
};
