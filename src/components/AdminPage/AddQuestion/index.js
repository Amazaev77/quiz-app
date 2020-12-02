import React from "react";
import {
  QuestionNumber, WrapperToAdd,
  WrapperAddQuestion, Wrapper, TextAnswers,
  AddAnswerText
} from "./style";
import { WrapperNumberAnswer, Border } from '../../styled/Lib';
import TextField from "../../TextField";
import { useDispatch, useSelector } from "react-redux";
import AddAnswer from './AddAnswer';
import { onChangeQuestion } from '../../../redux/features/addTest'

const AddQuestion = ({ question, questionIndex }) => {
  const dispatch = useDispatch();

  const answers = useSelector(state => state.addTest.items.answers);

  const handleChangeQuestion = (value) => {
    dispatch(onChangeQuestion(value, questionIndex));
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
              key={index}
              answerIndex={answer.qIndex}
              questionIndex={questionIndex}
              index={index}
            />
          ))}
          <WrapperNumberAnswer>
            <Border />
            <AddAnswerText>
              Добавить ответ #{answers.length + 1}
            </AddAnswerText>
            <Border />
          </WrapperNumberAnswer>
        </Wrapper>
      </WrapperToAdd>
    </WrapperAddQuestion>
  );
};

export default AddQuestion;
