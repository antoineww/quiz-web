import React from "react";
import strings from "./../resources/strings";
import { QUIZ_STAGES, DEFAULT_STATE_QUIZ } from "./../resources/constants";
import { FaPlus, FaMinus } from "react-icons/fa";
import { getQuizScore } from "./../helpers/common";

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const beginNewQuiz = () =>
    setStateQuiz({
      ...DEFAULT_STATE_QUIZ,
      stage: QUIZ_STAGES.IN_QUIZ
    });

  const exitQuiz = () =>
    setStateQuiz({
      stage: QUIZ_STAGES.HOME
    });

  const { questionsWithAnswers } = props;

  const score = getQuizScore(questionsWithAnswers);

  return (
    <div class="container results">
      <h1>{strings.results_header} </h1>
      <h1>{score}</h1>
      <ul id="list">
        <li class="listItem">
          <div class="resultIcon">
            <FaPlus />
          </div>
          <div class="resultAnswer">
            Unturned originally started as a Roblox game.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            Japan was part of the Allied Powers during World War I.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            This is the correct spelling of
            &quot;Supercalifragilisticexpialidocious&quot;.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaPlus />
          </div>
          <div class="resultAnswer"> Pluto is a planet.</div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            &quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube
            Zero&quot; were directed by the same person.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six
            Siege&quot; on its initial release: House, Clubhouse, Border,
            Consulate.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            The USS Missouri (BB-63) last served in the Korean War.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaPlus />
          </div>
          <div class="resultAnswer">
            {" "}
            The Klingon home planet is Qo&#039;noS.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            In Topology, the complement of an open set is a closed set.
          </div>
        </li>
        <li class="listItem">
          <div class="resultIcon">
            <FaMinus />
          </div>
          <div class="resultAnswer">
            Stagecoach owned &quot;South West Trains&quot; before losing the
            rights to FirstGroup and MTR in March of 2017.
          </div>
        </li>
      </ul>
      <button class="button" onClick={() => beginNewQuiz()}>
        {strings.results_play_again}
      </button>
      <button class="button" onClick={() => exitQuiz()}>
        {strings.results_exit}
      </button>
    </div>
  );
};

export default Results;
