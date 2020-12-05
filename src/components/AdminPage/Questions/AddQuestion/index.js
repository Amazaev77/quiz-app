import React from "react";
import { QuestionNumber, Inner } from "./style";
import Wrapper from "./Wrapper";
import PropTypes from "prop-types";

const AddQuestion = ({ question, questionIndex }) => {
  return (
    <div>
      <Inner>
        <QuestionNumber>#{questionIndex + 1}</QuestionNumber>
        <Wrapper questionIndex={questionIndex} question={question} />
      </Inner>
    </div>
  );
};

AddQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default AddQuestion;
