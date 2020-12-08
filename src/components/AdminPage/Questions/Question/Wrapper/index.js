import React from "react";
import TextField from "../../../../TextField";
import Answers from "./Answers";
import { Border, WrapperNumberAnswer } from "../../../../styled/Lib";
import {
  onAddAnswer,
  onChangeQuestion,
} from "../../../../../redux/features/addTest";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledWrapper,
  AddAnswerText,
  TextAnswers,
} from "./style";

const Wrapper = ({ questionIndex, question }) => {
  const dispatch = useDispatch();

  const answers = useSelector((state) =>
    state.addTest.items.answers.filter((item) => item.qIndex === questionIndex)
  );

  const handleChangeQuestion = (value) => {
    dispatch(onChangeQuestion(value, questionIndex));
  };

  const handleAddAnswer = () => {
    dispatch(onAddAnswer(questionIndex));
  };

  return (
    <StyledWrapper>
      <TextField
        placeHolder={`Введите текст вопроса #${questionIndex + 1}`}
        value={question.text}
        onChange={handleChangeQuestion}
      />
      <TextAnswers>Ответы</TextAnswers>
      <Answers answers={answers} questionIndex={questionIndex} />
      <WrapperNumberAnswer>
        <Border />
        <AddAnswerText onClick={handleAddAnswer}>
          Добавить ответ #{answers.length + 1}
        </AddAnswerText>
        <Border />
      </WrapperNumberAnswer>

    </StyledWrapper>
  );
};

export default Wrapper;
