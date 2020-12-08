import React from "react";
import {
  QuestionNumber,
  Inner,
  Separator,
  BigButton,
  ButtonToAddQuestion,
  SeparateBox,
  EmptyBlock,
  Item
} from "./style";
import Wrapper from "./Wrapper";
import PropTypes from "prop-types";
import { onAddQuestion } from '../../../../redux/features/addTest';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Button';

const Question = ({ question, questionIndex }) => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.addTest.items.questions);

  const handleAddQuestion = () => {
    dispatch(onAddQuestion(questionIndex));
  };

  return (
    <>
      <Inner>
        <QuestionNumber>#{questionIndex + 1}</QuestionNumber>
        <Wrapper questionIndex={questionIndex} question={question} />
      </Inner>
      {(questions.length - 1 === questionIndex) && (
        <SeparateBox>
          <EmptyBlock />
          <Item>
            <ButtonToAddQuestion onClick={handleAddQuestion}>
              Добавить вопрос #{questions.length + 1}
            </ButtonToAddQuestion>
            <Separator>Или</Separator>
            <BigButton>
              <Button>Опубликовать тест</Button>
            </BigButton>
          </Item>
        </SeparateBox>
        )}
    </>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default Question;
