import React from 'react';
import { StyledAnswer, AnswerCircle, AnswerText } from './style';

const Answer = ({ answer }) => {
  return (
    <StyledAnswer>
      <AnswerCircle>
        <span className="material-icons check">done</span>
        {/*<span className="material-icons close">close</span>*/}
      </AnswerCircle>
      <div>
        <AnswerText>
          {answer.text}
        </AnswerText>
        {/*<div className="answer-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>*/}
      </div>
    </StyledAnswer>
  )
}

export default Answer;