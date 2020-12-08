import React from "react";
import Answer from "./Answer";
import PropTypes from "prop-types";

const Answers = ({ answers }) => {
  return answers.map((answer, index) => (
    <Answer key={answer.id} index={index} answer={answer} />
  ));
};

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default Answers;
