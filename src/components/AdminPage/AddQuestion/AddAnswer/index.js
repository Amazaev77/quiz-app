import React from 'react';
import {
  NumberText,
  Checkbox, Label,
  SubTextTextarea, Check
} from "./style";
import { WrapperNumberAnswer, Border } from '../../../styled/Lib';
import checkIcon from '../../../../icons/check.svg';
import TextField from '../../../TextField';
import { useDispatch } from 'react-redux';
import { 
  onChangeAnswer, 
  onChangeDescription, 
  onChangeCheckbox 
} from '../../../../redux/features/addTest';

const AddAnswer = ({ questionIndex, index, answer }) => {
  const dispatch = useDispatch();

  const handleChangeCheckbox = (e) => {
    dispatch(onChangeCheckbox(e.target.value, answer.id));
  }

  const handleChangeAnswer = (e) => {
    dispatch(onChangeAnswer(e, index));
  }

  const handleChangeDescription = (e) => {
    dispatch(onChangeDescription(e, index));
  }

  return (
    <>
      <div>
        <WrapperNumberAnswer>
          <Border />
          <NumberText>
            Ответ #{index + 1}
          </NumberText>
          <Border />
        </WrapperNumberAnswer>
      </div>
      <Checkbox
        checked={answer.right}
        id={`check_${answer.id}`}
        onChange={handleChangeCheckbox}
      />
      <Label htmlFor={`check_${answer.id}`}>
        это правильный вариант ответа
      </Label>
      {answer.right && (
        <Check src={checkIcon} alt="check" />
      )}
      <TextField
        miniSize={true}
        value={answer.title}
        onChange={handleChangeAnswer}
        placeHolder={`Текст ответа #${index + 1}`}
      />
      <TextField
        textarea={true}
        miniSize={true}
        value={answer.description}
        onChange={handleChangeDescription}
        placeHolder="Примечение после ответа"
      />
      <SubTextTextarea>
        Пользователь увидит этот текст если он выберет этот вариант ответа
      </SubTextTextarea>
    </>
  );
}

export default AddAnswer;