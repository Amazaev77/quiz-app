import React from "react";
import { NumberText, Checkbox, Label, SubTextTextarea, Check } from "./style";
import { WrapperNumberAnswer, Border } from "../../../../../../Lib/Lib";
import checkIcon from "../../../../../../../icons/check.svg";
import TextField from "../../../../../../TextField";
import { useDispatch } from "react-redux";
import {
  changeAnswer,
  changeDescription,
  changeCheckbox,
} from "../../../../../../../redux/features/adminPanel";
import PropTypes from "prop-types";

const Answer = ({ index, answer }) => {
  const dispatch = useDispatch();

  const handleChangeCheckbox = (e) => {
    dispatch(changeCheckbox(e.target.value, answer.id));
  };

  const handleChangeAnswer = (e) => {
    dispatch(changeAnswer(e, answer.id));
  };

  const handleChangeDescription = (e) => {
    dispatch(changeDescription(e, answer.id));
  };

  return (
    <>
      <div>
        <WrapperNumberAnswer>
          <Border />
          <NumberText>Ответ #{index + 1}</NumberText>
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
      {answer.right && <Check src={checkIcon} alt="check" />}
      <TextField
        miniSize={true}
        answerRight={answer.right}
        value={answer.title}
        onChange={handleChangeAnswer}
        placeHolder={`Текст ответа #${index + 1}`}
      />
      <TextField
        textarea={true}
        answerRight={answer.right}
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
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answer;
