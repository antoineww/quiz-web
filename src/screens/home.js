import React from "react";
import strings from "./../resources/strings";
import { QUIZ_STAGES } from "./../resources/constants";

const Home = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const beginQuiz = () =>
    setStateQuiz({
      ...stateQuiz,
      stage: QUIZ_STAGES.IN_QUIZ
    });

  return (
    <div class="App-header">
      <h1>{strings.home_header}</h1>
      <img src="logo.svg" alt="logo" class="App-logo" />
      <h2>
        {strings.home_description_p1} <br /> {strings.home_description_p2}{" "}
      </h2>
      <h2>{strings.home_challenge}</h2>
      <button class="button" onClick={() => beginQuiz()}>
        {strings.home_begin}
      </button>
    </div>
  );
};

export default Home;
