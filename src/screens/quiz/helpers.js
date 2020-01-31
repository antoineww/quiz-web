import { QUIZ_STAGES } from "./../../resources/constants";

export const applyAnswer = (
  stateQuiz = {},
  setStateQuiz = () => {},
  questionCurrentIndex = 0,
  givenQuestionsWithAnswers = [{}],
  attempted_answer = null
) => {
  const questionsWithAnswers = givenQuestionsWithAnswers.map(
    question => question
  );

  questionsWithAnswers[
    questionCurrentIndex
  ].attempted_answer = attempted_answer;

  const goToQuestion = questionCurrentIndex + 1;

  setStateQuiz({ ...stateQuiz, questionsWithAnswers, goToQuestion });
};

export const onQuestionAnswered = (stateQuiz = {}, setStateQuiz = () => {}) => {
  const { questionsWithAnswers, goToQuestion } = stateQuiz;
  let { questionCurrentIndex } = stateQuiz;

  const potentialError =
    typeof goToQuestion !== "number" ||
    typeof questionCurrentIndex !== "number" ||
    !Array.isArray(questionsWithAnswers);
  if (potentialError) return;

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
