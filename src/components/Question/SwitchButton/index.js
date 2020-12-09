import React from "react";
import { BtnBox } from "../../styled/Lib";
import Button from "../../Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {filterQuestionSelector, offSelectedAnswer} from "../../../redux/features/answers";
import {
  onNextQuestion,
  onResetIndex,
} from "../../../redux/features/questions";

const SwitchButton = ({ indexOfCurrentQuestion }) => {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const history = useHistory();

  const answerSelected = useSelector((state) => state.answers.answerSelected);

  const onTogglePage = () => {
    if (indexOfCurrentQuestion + 1 < questions.length) {
      dispatch(onNextQuestion());
      dispatch(offSelectedAnswer());
    }
    else {
      history.push(`/${id}/result`);
      dispatch(onResetIndex());
    }
  };

  const questions = useSelector(filterQuestionSelector(id));

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
