import React from "react";
import strings from "./../resources/strings";
import { beginQuiz } from "../helpers/navigationHooks";

const Home = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  return (
    <div class="App-header">
      <h1>{strings.home_header}</h1>
      <img src="logo.svg" alt="logo" class="App-logo" />
      <h2>
        {strings.home_description_p1} <br /> {strings.home_description_p2}{" "}
      </h2>
      <h2>{strings.home_challenge}</h2>
      <button className="btn" onClick={() => beginQuiz(setStateQuiz)}>
        {strings.home_begin}
      </button>
    </div>
  );
};

export default Home;
