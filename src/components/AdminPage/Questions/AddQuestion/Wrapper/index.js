import React from "react";
import TextField from "../../../../TextField";
import {} from "../style";
import Answers from "./Answers";
import { Border, WrapperNumberAnswer } from "../../../../styled/Lib";
import Button from "../../../../Button";
import {
  onAddAnswer,
  onAddQuestion,
  onChangeQuestion,
} from "../../../../../redux/features/addTest";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledWrapper,
  AddAnswerText,
  BigButton,
  ButtonToAddQuestion,
  Or,
  TextAnswers,
} from "./style";

const Wrapper = ({ questionIndex, question }) => {
  const dispatch = useDispatch();

  const answers = useSelector((state) =>
    state.addTest.items.answers.filter((item) => item.qIndex === questionIndex)
  );

  const questions = useSelector((state) => state.addTest.items.questions);

  const handleChangeQuestion = (value) => {
    dispatch(onChangeQuestion(value, questionIndex));
  };

  const handleAddAnswer = () => {
    dispatch(onAddAnswer(questionIndex));
  };

  const handleAddQuestion = () => {
    dispatch(onAddQuestion(questionIndex));
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
      {questions.length - 1 === questionIndex && (
        <>
          <ButtonToAddQuestion onClick={handleAddQuestion}>
            Добавить вопрос #{questions.length + 1}
          </ButtonToAddQuestion>
          <Or>Или</Or>
          <BigButton>
            <Button>Опубликовать тест</Button>
          </BigButton>
        </>
      )}
    </StyledWrapper>
  );
};

export default Wrapper;
