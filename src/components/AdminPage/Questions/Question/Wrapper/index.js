import React from "react";
import TextField from "../../../../TextField";
import Answers from "./Answers";
import { Border, WrapperNumberAnswer } from "../../../../styled/Lib";
import {
  addAnswer,
  changeQuestion,
} from "../../../../../redux/features/adminPanel";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledWrapper,
  AddAnswerText,
  TextAnswers,
} from "./style";

const Wrapper = ({ questionIndex, question }) => {
  const dispatch = useDispatch();

  const answers = useSelector((state) =>
    state.adminPanel.answers.filter((item) => item.qIndex === questionIndex)
  );

  const handleChangeQuestion = (value) => {
    dispatch(changeQuestion(value, questionIndex));
  };

  const handleAddAnswer = () => {
    dispatch(addAnswer(questionIndex));
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
