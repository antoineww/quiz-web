import { getQuestions } from "./../../data/api";
import constants from "./../constants";

export const getQuestionsAction = (params = {}) => {
  return async (dispatch, getState) => {
    const {
      progress: { gettingQuestions }
    } = getState();
    if (gettingQuestions) return;

    dispatch({
      type: constants.GET_QUESTIONS_START
    });

    try {
      const { cb } = params;
      const response = await getQuestions();
      const { data, status } = response;
      if (status) {
        const { results: questions } = data;
        if (Array.isArray(questions)) {
          dispatch({
            type: constants.GET_QUESTIONS,
            questions
          });
        }
      }

      dispatch({
        type: constants.GET_QUESTIONS_END,
        status
      });

      cb();
    } catch (err) {
      dispatch({
        type: constants.GET_QUESTIONS_END,
        err
      });
    }
  };
};

export default { getQuestionsAction };
