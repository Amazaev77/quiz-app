import React from "react";
import { BtnBox } from "../../styled/Lib";
import Button from "../../Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { offSelectedAnswer } from "../../../redux/features/answers";
import {
  onNextQuestion,
  onResetIndex,
} from "../../../redux/features/questions";

const SwitchButton = ({ questions, indexOfCurrentQuestion }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let history = useHistory();

  const answerSelected = useSelector((state) => state.answers.answerSelected);

  const onTogglePage = () => {
    dispatch(offSelectedAnswer());

    if (indexOfCurrentQuestion + 1 < questions.length) {
      dispatch(onNextQuestion());
    } else {
      history.push(`/${id}/result`);
      dispatch(onResetIndex());
    }
  };

  return (
    answerSelected && (
      <BtnBox>
        <Button onClick={onTogglePage}>
          {indexOfCurrentQuestion !== questions.length - 1
            ? "Далее"
            : "Завершить"}
        </Button>
      </BtnBox>
    )
  );
};

export default SwitchButton;
