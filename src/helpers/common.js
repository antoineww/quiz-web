export const getQuizProgess = (
  questionCurrentIndex = 0,
  questionsWithAnswers = []
) => `${questionCurrentIndex + 1} of ${questionsWithAnswers.length}`;
