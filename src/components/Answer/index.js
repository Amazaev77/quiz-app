import React from "react";
import {
  StyledAnswer,
  AnswerCircle,
  AnswerText,
  WrapperAnswer,
  AnswerSubtext,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { onSelectAnswer } from "../../redux/features/answers";
import { onSaveAnswer } from '../../redux/features/results';
import { useParams } from 'react-router-dom';

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
      dispatch(onSelectAnswer(answer.id));
      dispatch(onSaveAnswer({
        testId,
        questionId,
        answerId: answer.id,
        right: answer.right
      }));
    }
  };

  return (
    <StyledAnswer>
      <WrapperAnswer onClick={handleSelectAnswer}>
        <AnswerCircle>
          {correctAnswer && <span className="material-icons check">done</span>}
          {wrongAnswer && !answer.right && (
            <span className="material-icons close">close</span>
          )}
        </AnswerCircle>
        <div>
          <AnswerText
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
            answerRight={answer.right}
          >
            {answer.text}
          </AnswerText>
          {wrongAnswer && answer.subtext && (
            <AnswerSubtext
              correctAnswer={correctAnswer}
              wrongAnswer={wrongAnswer}
              answerRight={answer.right}
            >
              {answer.subtext}
            </AnswerSubtext>
          )}
        </div>
      </WrapperAnswer>
    </StyledAnswer>
  );
};

export default Answer;