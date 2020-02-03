import React from "react";
import { FaBroadcastTower } from "react-icons/fa";
import strings from "./../../../resources/strings";

export const QuizNotFound = () => (
  <div class="quiz-not-found">
    <FaBroadcastTower /> <h2>{strings.quiz_not_found}</h2>
  </div>
);
