import React, { useState } from "react";
import {
  StyledAddQuestions,
  QuestionNumber,
  WrapperToAdd, AnswersText,
  WrapperAddQuestion, Wrapper,
} from "./style";
import TextField from "../../TextField";
import AddAnswer from "./AddAnswer";

const AddQuestion = () => {
  const [text, setText] = useState("");

  return (
    <WrapperAddQuestion>
      <StyledAddQuestions>Вопросы</StyledAddQuestions>
      <WrapperToAdd>
        <QuestionNumber>#1</QuestionNumber>
        <Wrapper>
          <TextField
            placeHolder="Введите текст вопроса #1"
            value={text}
            onChange={setText}
          />
          <AnswersText>
            Ответы
          </AnswersText>
          <AddAnswer />
        </Wrapper>
      </WrapperToAdd>
    </WrapperAddQuestion>
  );
};

export default AddQuestion;
