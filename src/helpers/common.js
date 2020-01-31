import { DEFAULT_QUESTION_WITH_ANSWER } from "./../resources/constants";

export const getQuizProgess = (
  questionCurrentIndex = -1,
  questionsWithAnswers = []
) => `${questionCurrentIndex + 1} of ${questionsWithAnswers.length}`;

export const getQuizScore = (questionsWithAnswers = []) =>
  `${
    questionsWithAnswers.filter(question => question.answer === true).length
  } / ${questionsWithAnswers.length}`;

export const ensureCriticalQuestionProperties = (
  possibleQuestionWithAnswer = {}
) => {
  const questionWithAnswer = { ...possibleQuestionWithAnswer };

  questionWithAnswer.attempted_answer =
    DEFAULT_QUESTION_WITH_ANSWER.attempted_answer;

  if (
    typeof questionWithAnswer.correct_answer !== "string" ||
    !Array.isArray(questionWithAnswer.incorrect_answers)
  ) {
    questionWithAnswer.correct_answer =
      DEFAULT_QUESTION_WITH_ANSWER.correct_answer;

    questionWithAnswer.incorrect_answers =
      DEFAULT_QUESTION_WITH_ANSWER.incorrect_answers;
  }

  return questionWithAnswer;
};

export const makeAQuizQuestion = (questionWithAnswer = {}) =>
  ensureCriticalQuestionProperties({
    ...DEFAULT_QUESTION_WITH_ANSWER,
    ...questionWithAnswer
  });

export const answerQuizQuestion = (
  questionCurrentIndex = 0,
  questionsWithAnswers = [{}],
  attempted_answer = null
) => ({ ...questionsWithAnswers[questionCurrentIndex], attempted_answer });
