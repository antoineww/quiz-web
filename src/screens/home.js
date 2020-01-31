import React from "react";
import strings from "./../resources/strings";
import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";
import { makeAQuizQuestion } from "./../helpers/common";
import questionsData from "./../data/mock_questions";

const Home = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  // TODO: Remove mock data
  const { results } = questionsData;
  const questionsWithAnswers = results.map(question =>
    makeAQuizQuestion(question)
  );
  //

  const beginQuiz = () =>
    setStateQuiz({
      ...DEFAULT_STATE_QUIZ,
      stage: QUIZ_STAGES.IN_QUIZ,
      questionsWithAnswers
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
