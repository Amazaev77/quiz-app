import React, { useEffect, useState } from 'react'
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
import { addQuestion, addTest } from '../../../../redux/features/adminPanel';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Button';
import { BoxForSpinner, ErrorBlock, SpinnerForButton } from '../../../Authorization/BtnToLogIn/style'
import spinner from "../../../../icons/spinner.svg";
import { useHistory } from 'react-router-dom';

const Question = ({ question, questionIndex }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const questions = useSelector((state) => state.adminPanel.questions);
  const loading = useSelector((state) => state.adminPanel.loading);
  const test = useSelector((state) => state.adminPanel.test);

  const handleAddQuestion = () => {
    dispatch(addQuestion(questionIndex));
  };

  const handleAddTest = () => {
    if (test.title.trim() && test.subtitle.trim()) {
      dispatch(addTest());
      history.push('/')
    } else {
      setError(true)
    }
  }

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
              {loading && (
                  <BoxForSpinner>
                    <SpinnerForButton src={spinner} alt="loading" />
                  </BoxForSpinner>
              )}
              {error && (
                <ErrorBlock error={error}>Поля пустые</ErrorBlock>
              )}
              <Button
                onClick={handleAddTest}
                disabled={loading}
                waiting={loading}
              >
                Опубликовать тест
              </Button>
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
