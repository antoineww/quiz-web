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

export const makeAQuizQuestion = (questionWithAnswer = {}) => {
  const processedQuestionWithAnswer = {
    ...DEFAULT_QUESTION_WITH_ANSWER,
    ...questionWithAnswer
  };

  ensureCriticalQuestionProperties(processedQuestionWithAnswer);

  // Parse html characters
  const domparser = new DOMParser();
  const {
    body: { textContent: parsedQuestion }
  } = domparser.parseFromString(
    processedQuestionWithAnswer.question,
    "text/html"
  );

  processedQuestionWithAnswer.question = parsedQuestion;

  return processedQuestionWithAnswer;
};
