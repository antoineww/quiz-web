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
  const header = percentage ? `${strings.results_header} ${percentage} %` : "";
  const resultItems = questionsWithAnswers.map(questionWithAnswer => (
    <li className={`listItem ${getScoreClass(questionWithAnswer.is_correct)}`}>
      <div className="resultIcon">
        {getScoreSymbol(questionWithAnswer.is_correct)}
      </div>
      <div className="resultAnswer">{questionWithAnswer.question}</div>
    </li>
  ));

  return (
    <div className="container results">
      <h1>{header}</h1>
      <h1>{fraction}</h1>
      <ul id="list">{resultItems}</ul>
      <div className="footer">
        <button className="btn" onClick={() => beginQuiz(setStateQuiz)}>
          {strings.results_play_again}
        </button>
        <button className="btn btn-exit" onClick={() => exitQuiz(setStateQuiz)}>
          {strings.results_exit}
        </button>
      </div>
    </div>
  );
};

export default Results;
