import React from "react";
import PropTypes from "prop-types";
import {
  StyledAnswer,
  AnswerCircle,
  AnswerText,
  WrapperAnswer,
  AnswerSubtext, Check,
} from './style'
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../../../../redux/features/answers";
import { saveAnswer } from "../../../../redux/features/results";
import { useParams } from "react-router-dom";
import check from '../../../../icons/check.svg';
import xIcon from '../../../../icons/xIcon.svg';

const Answer = ({ answer, questionId }) => {
  const dispatch = useDispatch();
  const testId = useParams().id;

  const answerSelected = useSelector((state) => state.answers.answerSelected);
  const answerSelectedId = useSelector(
    (state) => state.answers.answerSelectedId
  );

  const correctAnswer = answerSelected && answer.right;
  const wrongAnswer = answerSelected && answerSelectedId === answer.id;

  const handleSelectAnswer = () => {
    if (!answerSelected) {
      dispatch(selectAnswer(answer.id));
      dispatch(
          saveAnswer({
          testId,
          questionId,
          answerId: answer.id,
          right: answer.right,
        })
      );
    }
  };

  return (
    <StyledAnswer>
      <WrapperAnswer onClick={handleSelectAnswer}>
        <AnswerCircle>
          {correctAnswer && <Check src={check} alt="check" />}
          {wrongAnswer && !answer.right && (
            <img src={xIcon} alt="xIcon" />
          )}
        </AnswerCircle>
        <div>
          <AnswerText
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
            answerRight={answer.right}
          >
            {answer.title}
          </AnswerText>
          {wrongAnswer && answer.description && (
            <AnswerSubtext
              correctAnswer={correctAnswer}
              wrongAnswer={wrongAnswer}
              answerRight={answer.right}
            >
              {answer.description}
            </AnswerSubtext>
          )}
        </div>
      </WrapperAnswer>
    </StyledAnswer>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default Answer;
