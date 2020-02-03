import React from "react";
import strings from "./../resources/strings";
import { FaPlus, FaMinus, FaCircle } from "react-icons/fa";
import { getQuizScore } from "./../helpers/common";
import { beginQuiz, exitQuiz } from "../helpers/navigationHooks";

const getScoreSymbol = is_correct => {
  switch (is_correct) {
    case true:
      return <FaPlus />;
    case false:
      return <FaMinus />;
    default:
      return <FaCircle />;
  }
};

const getScoreClass = is_correct => {
  switch (is_correct) {
    case true:
      return "result-true";
    case false:
      return "result-false";
    default:
      return "";
  }
};

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const { questionsWithAnswers } = stateQuiz;

  const { fraction, percentage } = getQuizScore(questionsWithAnswers);
  const resultItems = questionsWithAnswers.map(questionWithAnswer => (
    <li class={`listItem ${getScoreClass(questionWithAnswer.is_correct)}`}>
      <div class="resultIcon">
        {getScoreSymbol(questionWithAnswer.is_correct)}
      </div>
      <div class="resultAnswer">{questionWithAnswer.question}</div>
    </li>
  ));

  return (
    <div class="container results">
      <h1>
        {strings.results_header} {`${percentage} %`}
      </h1>
      <h1>{fraction}</h1>
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
