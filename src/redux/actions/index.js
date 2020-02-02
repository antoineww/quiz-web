import { getQuestions } from "./../../data/api";
import constants from "./../constants";

export const getQuestionsAction = () => {
  return dispatch => {
    dispatch({
      type: constants.GET_QUESTIONS_START
    });

    getQuestions()
      .then(response => {
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
      })
      .catch(err => {
        dispatch({
          type: constants.GET_QUESTIONS_END,
          err
        });
      });
  };
};

export default { getQuestionsAction };
