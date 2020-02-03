export const canSupplyFreshQuestions = (stateQuiz, setStateQuiz, props) => {
  const { startNew } = stateQuiz;

  if (startNew === true) {
    const {
      app: { questionsWithAnswers: questionsWithAnswersFromStore }
    } = props;

    // Copy loaded questions for new quiz
    const questionsWithAnswers = questionsWithAnswersFromStore.map(
      question => question
    );

    setStateQuiz({
      ...stateQuiz,
      questionsWithAnswers,
      startNew: false
    });
  }
};
