import React from "react";
import PileBox from "../../PileBox";
import { useSelector } from "react-redux";
import { LengthQuestions, TestName, StyledTest } from "./style";
import PropTypes from "prop-types";

const Test = ({ test }) => {
  /* 
  * Так как сервер фейковый нужно получить количество вопросов,
  * поэтому фильтруем вопросы по текущему тесту
  */
  const filteredQuestions = useSelector((state) => {
    return state.questions.items.filter(
      (question) => question.testId === test.id
    );
  });

  return (
    <StyledTest to={`/${test.id}`}>
      <TestName>{test.title}</TestName>
      <LengthQuestions>{filteredQuestions.length} вопросов</LengthQuestions>
      <PileBox />
    </StyledTest>
  );
};

Test.propTypes = {
  test: PropTypes.object.isRequired,
};

export default Test;
