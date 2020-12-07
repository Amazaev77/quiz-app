import React from "react";
import { QuestionNumber, Inner } from "./style";
import Wrapper from "./Wrapper";
import PropTypes from "prop-types";

const Question = ({ question, questionIndex }) => {
  return (
    <div>
      <Inner>
        <QuestionNumber>#{questionIndex + 1}</QuestionNumber>
        <Wrapper questionIndex={questionIndex} question={question} />
      </Inner>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default Question;
