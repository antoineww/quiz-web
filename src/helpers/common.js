export const getQuizProgess = (
  questionCurrentIndex = 0,
  questionsWithAnswers = []
) => `${questionCurrentIndex + 1} of ${questionsWithAnswers.length}`;

export const getQuizScore = (questionsWithAnswers = []) =>
  `${
    questionsWithAnswers.filter(question => question.answer === true).length
  } / ${questionsWithAnswers.length}`;
