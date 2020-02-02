import { makeAQuizQuestion } from "./../../helpers/common";
import constants from "./../constants";

export const initialState = {
  questionsWithAnswers: []
};

export const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_QUESTIONS:
      const { questions } = action;

      const questionsWithAnswers = questions.map(question =>
        makeAQuizQuestion(question)
      );

      return {
        ...state,
        questionsWithAnswers: questionsWithAnswers
      };

    default:
      return {
        ...state
      };
  }
};

export default app;
