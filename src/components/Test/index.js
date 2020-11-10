import React, { useEffect } from 'react';
import PileBox from '../PileBox';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuestions } from '../../redux/features/questions';
import { StyledTest, LengthQuestions, TestName } from './style';

const Test = ({ test }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuestions());
  },[dispatch]);

  const questionLength = useSelector(state => {
    return state.questions.database.filter(
      (question) => question.testId === test.id).length;
  });

  return (
    <StyledTest to={`/${test.id}`}>
        <TestName>
          {test.title}
        </TestName>
        <LengthQuestions>
          {questionLength} вопросов
        </LengthQuestions>
        <PileBox />
    </StyledTest>
  )
}

export default Test;