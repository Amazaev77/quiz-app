import React from "react";
import AddAnswer from "./AddAnswer";
import PropTypes from "prop-types";

const Answers = ({ answers }) => {
  return answers.map((answer, index) => (
    <AddAnswer key={answer.id} index={index} answer={answer} />
  ));
};

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default Answers;
