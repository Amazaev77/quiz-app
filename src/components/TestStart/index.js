import React from 'react';
import PileBox from '../PileBox';
import MainButton from '../MainButton';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledTestStart, Title, Subtitle,
         LengthQuestions, BtnBox } from './style';

const TestStart = () => {
  const testId = useParams().id;

  const test = useSelector(state => state.tests.database.find(
    (item) => item.id.toString() === testId)
  );

  const questionLength = useSelector(state => {
    return state.questions.database.filter(
      (question) => question.testId.toString() === testId).length;
  });

  return (
    <StyledTestStart>
      <Title>
        {test?.title}
      </Title>
      <Subtitle>
        {test?.subtitle}
      </Subtitle>
      <BtnBox>
        <MainButton LinkTo={`/${testId}/questionId`} />
      </BtnBox>
      <LengthQuestions>
        В тесте {questionLength} вопросов
      </LengthQuestions>
      <PileBox />
    </StyledTestStart>
  )
}

export default TestStart;