import React from "react";
import {
  QuestionNumber, WrapperToAdd,
  WrapperAddQuestion, Wrapper, TextAnswers,
  AddAnswerText, ButtonToAddQuestion, Or
} from "./style";
import { WrapperNumberAnswer, Border } from '../../styled/Lib';
import TextField from "../../TextField";
import { useDispatch, useSelector } from "react-redux";
import AddAnswer from './AddAnswer';
import { onChangeQuestion, onAddAnswer, onAddQuestion } from '../../../redux/features/addTest';
import Button from '../../Button';

const AddQuestion = ({ question, questionIndex }) => {
  const dispatch = useDispatch();

  const answers = useSelector(state => state.addTest.items.answers.filter(
    item => item.qIndex === questionIndex
  ));
  
  const questions = useSelector(state => state.addTest.items.questions);

  const handleChangeQuestion = (value) => {
    dispatch(onChangeQuestion(value, questionIndex));
  }
  
  const handleAddAnswer = () => {
    dispatch(onAddAnswer(questionIndex))
  }

  const handleAddQuestion = () => {
    dispatch(onAddQuestion(questionIndex));
  }

  return (
    <WrapperAddQuestion>
      <WrapperToAdd>
        <QuestionNumber>#{questionIndex + 1}</QuestionNumber>
        <Wrapper>
          <TextField
            placeHolder={`Введите текст вопроса #${questionIndex + 1}`}
            value={question.text}
            onChange={handleChangeQuestion}
          />
          <TextAnswers>
            Ответы
          </TextAnswers>
          {answers.map((answer, index) => (
            <AddAnswer 
              key={answer.id}
              answerIndex={answer.qIndex}
              questionIndex={questionIndex}
              index={index}
              answer={answer}
            />
          ))}
          <WrapperNumberAnswer>
            <Border />
            <AddAnswerText onClick={handleAddAnswer}>
              Добавить ответ #{answers.length + 1}
            </AddAnswerText>
            <Border />
          </WrapperNumberAnswer>
          {(questions.length - 1 === questionIndex) && (
            <>
              <ButtonToAddQuestion onClick={handleAddQuestion}>
                Добавить вопрос #{questions.length + 1}
              </ButtonToAddQuestion>
              <Or>
                Или
              </Or>
              <Button>
                Опубликовать тест
              </Button>
            </>
          )}
        </Wrapper>
      </WrapperToAdd>
    </WrapperAddQuestion>
  );
};

export default AddQuestion;


