import React from "react";
import strings from "./../resources/strings";
import { FaPlus, FaMinus } from "react-icons/fa";
import { getQuizScore } from "./../helpers/common";
import { beginQuiz, exitQuiz } from "./../helpers/hooks";

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const { questionsWithAnswers } = stateQuiz;

  const score = getQuizScore(questionsWithAnswers);
  const resultItems = questionsWithAnswers.map(questionWithAnswer => (
    <li class="listItem">
      <div class="resultIcon">
        {questionWithAnswer.is_correct === true ? <FaPlus /> : <FaMinus />}
      </div>
      <div class="resultAnswer">{questionWithAnswer.question}</div>
    </li>
  ));

  return (
    <div class="container results">
      <h1>{strings.results_header} </h1>
      <h1>{score}</h1>
      <ul id="list">{resultItems}</ul>
      <div class="footer">
        <button class="btn" onClick={() => beginQuiz(setStateQuiz)}>
          {strings.results_play_again}
        </button>
        <button class="btn btn-exit" onClick={() => exitQuiz(setStateQuiz)}>
          {strings.results_exit}
        </button>
      </div>
    </div>
  );
};

export default Results;
