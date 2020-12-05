import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";
import { useDispatch, useSelector } from "react-redux";
import { loadAnswers } from "../../../redux/features/answers";

const Answers = ({ question }) => {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answers.items);

  useEffect(() => {
    dispatch(loadAnswers(question?.id));
  }, [dispatch, question?.id]);

  return answers.map((answer) => (
    <Answer key={answer.id} answer={answer} questionId={question.id} />
  ));
};

Answers.propTypes = {
  question: PropTypes.object,
};

export default Answers;
