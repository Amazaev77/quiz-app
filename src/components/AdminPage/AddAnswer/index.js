import React, { useState } from 'react';
import {
  Border,
  NumberText,
  StyledAddAnswer,
  WrapperNumberAnswer,
  Checkbox, Label,
  SubTextTextarea, Check,
  InnerAnswer, Empty, WrapperAnswer
} from "./style";
import checkIcon from '../../../icons/check.svg';
import TextField from '../../TextField'


const AddAnswer = () => {
  const [answer, setAnswer] = useState("");
  const [comment, setComment] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <WrapperAnswer>
      <Empty />
      <InnerAnswer>
        <StyledAddAnswer>
          <WrapperNumberAnswer>
            <Border />
            <NumberText>
              Ответ #1
            </NumberText>
            <Border />
          </WrapperNumberAnswer>
        </StyledAddAnswer>
        <Checkbox
          checked={checked}
          id='check'
          onChange={handleChangeCheckbox}
        />
        <Label htmlFor="check">
          это правильный вариант ответа
        </Label>
        {checked && (
          <Check src={checkIcon} alt="check"/>
        )}
        <TextField
          miniSize={true}
          value={answer}
          onChange={setAnswer}
          placeHolder="Текст ответа #1"
        />
        <TextField
          textarea={true}
          miniSize={true}
          value={comment}
          onChange={setComment}
          placeHolder="Примечение после ответа"
        />
        <SubTextTextarea>
          Пользователь увидит этот текст если он выберет этот вариант ответа
        </SubTextTextarea>
      </InnerAnswer>
    </WrapperAnswer>
  );
}

export default AddAnswer;