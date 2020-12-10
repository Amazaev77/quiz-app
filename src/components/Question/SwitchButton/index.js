import React from "react";
import { BtnBox } from "../../styled/Lib";
import Button from "../../Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterQuestionSelector, unSelectAnswer } from "../../../redux/features/answers";
import {
  nextQuestion,
  resetIndex,
} from "../../../redux/features/questions";

const SwitchButton = ({ indexOfCurrentQuestion }) => {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const history = useHistory();

  const answerSelected = useSelector((state) => state.answers.answerSelected);

  const handleTogglePage = () => {
    if (indexOfCurrentQuestion + 1 < questions.length) {
      dispatch(nextQuestion());
      dispatch(unSelectAnswer());
    }
    else {
      history.push(`/${id}/result`);
      dispatch(resetIndex());
    }
  };

  const questions = useSelector(filterQuestionSelector(id));

  const isLastQuestion = indexOfCurrentQuestion === questions.length - 1;

  return (
    answerSelected && (
      <BtnBox>
        <Button onClick={handleTogglePage}>
          { isLastQuestion ? "Завершить" : "Далее" }
        </Button>
      </BtnBox>
    )
  );
};

export default SwitchButton;
