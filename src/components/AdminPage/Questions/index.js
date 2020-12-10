import React from "react";
import { useSelector } from "react-redux";
import Question from "./Question";

const Questions = () => {
  const questions = useSelector((state) => state.adminPanel.questions);

  return questions.map((question, index) => (
    <Question question={question} questionIndex={index} key={question.id} />
  ));
};

export default Questions;
