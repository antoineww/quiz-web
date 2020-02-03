import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "./../redux/actions";
import ScreenRouter from "./screenRouter";

const Routes = (props = {}) => {
  return <ScreenRouter {...props} />;
};

export default connect(
  state => {
    const {
      app: { questionsWithAnswers },
      progress: { gettingQuestions }
    } = state;

    return {
      app: { questionsWithAnswers },
      progress: { gettingQuestions }
    };
  },
  dispatch => ({
    actionsGroup: bindActionCreators(
      {
        getQuestionsAction: actions.getQuestionsAction
      },
      dispatch
    )
  })
)(Routes);
