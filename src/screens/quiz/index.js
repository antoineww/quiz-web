import React, { useEffect } from "react";

import strings from "./../../resources/strings";

import { onQuestionAnswered } from "./helpers";
import { quitQuiz } from "../../helpers/navigationHooks";
import { QuizContent } from "./components";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  console.log("Quiz", { props });

  const { goToQuestion } = stateQuiz;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => onQuestionAnswered(stateQuiz, setStateQuiz), [goToQuestion]);
  /* eslint-enable */

  return (
    <div class="container quiz">
      <QuizContent {...props} />
      <div class="footer">
        <button
          class="btn btn-exit"
          onClick={() => quitQuiz(stateQuiz, setStateQuiz)}
        >
          {strings.quiz_quit}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
