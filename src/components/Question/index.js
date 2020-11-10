import React, { useEffect } from 'react';
import Answer from '../Answer';
import PileBox from '../PileBox';
import MainButton from '../MainButton';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BtnBox, StyledQuestion, QuestionText, LengthQuestions } from './style';
import { loadAnswers } from '../../redux/features/answers';

const Question = () => {
  const dispatch = useDispatch();

  const paramsId = useParams().id;
  const activeQuestion = useSelector(state => state.questions.activeQuestion);

  const questionLength = useSelector(state => {
    return state.questions.database.filter(
      (question) => question.testId.toString() === paramsId).length;
  });

  const question = useSelector(state => state.questions.database.filter(
    questions => questions.testId.toString() === paramsId
  )[activeQuestion]);

  useEffect(() => {
    dispatch(loadAnswers(question?.id));
  },[dispatch, question]);

  const answers = useSelector(state => state.answers.database);

  return (
    <StyledQuestion>
      <QuestionText>
        {question?.text}
      </QuestionText>
        {answers.map(answer => <Answer key={answer.id} answer={answer} />)}
        <BtnBox>
          <MainButton LinkTo="/" />
        </BtnBox>
      <LengthQuestions>{activeQuestion + 1}/{questionLength}</LengthQuestions>
      <PileBox />
    </StyledQuestion>
  )
}

export default Question;