import { beginQuiz } from "./../helpers/navigationHooks";

export const canPrepareQuestionsForNewQuiz = (
  stateQuiz,
  setStateQuiz,
  props
) => {
  const { startNew } = stateQuiz;

  if (startNew === true) {
    const copyQuestionsAndStartQuiz = () => {
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
    };

    copyQuestionsAndStartQuiz();
  }
};

export const canSupplyFreshQuestions = (stateQuiz, setStateQuiz, props) => {
  const { getFreshQuestions, autoStart } = stateQuiz;
  const {
    actionsGroup: { getQuestionsAction }
  } = props;

  if (getFreshQuestions === true) {
    let cb = () => {};
    if (autoStart) cb = () => beginQuiz(setStateQuiz);

    setStateQuiz({
      ...stateQuiz,
      getFreshQuestions: false,
      autoStart: false
    });

    getQuestionsAction({ cb });
  }
};
