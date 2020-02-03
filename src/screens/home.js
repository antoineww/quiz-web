import React from "react";
import strings from "./../resources/strings";
import { beginQuiz } from "../helpers/navigationHooks";

export const LoadingButton = (props = {}) => (
  <button className="btn btn-loading">
    <img src="logo.svg" alt="logo" class="loader-logo" />
    {strings.home_loading}
    <img src="logo.svg" alt="logo" class="loader-logo" />
  </button>
);

export const BeginButton = (props = {}) => (
  <button className="btn" {...props}>
    {strings.home_begin}
  </button>
);

const Home = (props = {}) => {
  const {
    setStateQuiz,
    progress: { gettingQuestions }
  } = props;

  return (
    <div class="App-header">
      <h1>{strings.home_header}</h1>
      <img src="logo.svg" alt="logo" class="App-logo" />
      <h2>
        {strings.home_description_p1} <br /> {strings.home_description_p2}
      </h2>
      <h2>{strings.home_challenge}</h2>

      {gettingQuestions ? (
        <LoadingButton />
      ) : (
        <BeginButton onClick={() => beginQuiz(setStateQuiz)} />
      )}
    </div>
  );
};

export default Home;
