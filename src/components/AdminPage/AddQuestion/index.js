import React, { useState } from "react";
import {
  QuestionNumber,
  WrapperToAdd, AnswersText,
  WrapperAddQuestion, Wrapper,
} from "./style";
import TextField from "../../TextField";

const AddQuestion = () => {
  const [text, setText] = useState("");

  return (
    <WrapperAddQuestion>
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
        </Wrapper>
      </WrapperToAdd>
    </WrapperAddQuestion>
  );
};

export default AddQuestion;
