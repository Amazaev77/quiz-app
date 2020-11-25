import React from "react";
import PileBox from "../PileBox";
import { useSelector } from "react-redux";
import { StyledTest, LengthQuestions, TestName } from "./style";
import PropTypes from "prop-types";

const Test = ({ test }) => {
  const questionLength = useSelector((state) => {
    return state.questions.items.filter(
      (question) => question.testId === test.id
    ).length;
  });

  return (
    <StyledTest to={`/${test.id}`}>
      <TestName>{test.title}</TestName>
      <LengthQuestions>{questionLength} вопросов</LengthQuestions>
      <PileBox />
    </StyledTest>
  );
};

Test.propTypes = {
  test: PropTypes.object.isRequired
}

export default Test;