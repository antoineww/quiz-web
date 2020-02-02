import constants from "../constants";
export const initialState = {
  gettingQuestions: false
};

const progress = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_QUESTIONS_START:
      return {
        ...state,
        gettingQuestions: true
      };
    case constants.GET_QUESTIONS_END:
      return {
        ...state,
        gettingQuestions: false
      };

    default:
      return {
        ...state
      };
  }
};

export default progress;
