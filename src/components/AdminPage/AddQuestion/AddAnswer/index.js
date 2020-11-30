import React, { useState } from 'react'
import {
  Border,
  NumberText,
  StyledAddAnswer,
  WrapperNumberAnswer,
  Checkbox, Label,
  SubTextTextarea, Check
} from "./style";
import checkIcon from '../../../../icons/check.svg';
import TextField from '../../../TextField'


const AddAnswer = () => {
  const [answer, setAnswer] = useState("");
  const [comment, setComment] = useState("");
  let checked = false;

  const handleChangeCheckbox = (e) => {
    e.target.checked ? checked = true : checked = false;
    console.log(e.target.checked)
  }


  return (
    <>
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
        type="checkbox"
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
    </>
  );
}

export default AddAnswer;