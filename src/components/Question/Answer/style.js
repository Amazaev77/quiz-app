import styled, { keyframes } from "styled-components";

export const StyledAnswer = styled.div`
  margin-bottom: 30px;
`;

export const WrapperAnswer = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

export const AnswerCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid rgba(0, 51, 153, 0.5);
  margin-right: 15px;
  box-shadow: 0 1px 10px rgba(16, 96, 255, 0.15);
  display: flex;
  justify-content: center;
`;

export const AnswerText = styled.div`
  position: relative;
  max-width: 670px;
  overflow-wrap: anywhere;
  z-index: 100;
  background-color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ correctAnswer, wrongAnswer, answerRight }) =>
    wrongAnswer && !answerRight ? "#E70202" : correctAnswer && "#12D202"};
`;

const AnswerSubtextAnimation = keyframes`
  from {
    transform: translateY(-1.2rem);
    height: 0;
  }
  to {
    transform: translateY(0);
    height: 1rem;
  }
`;

export const AnswerSubtext = styled.div`
  font-size: 18px;
  overflow-wrap: anywhere;
  animation: ${AnswerSubtextAnimation} 250ms ease-in forwards;
  color: ${({ wrongAnswer, answerRight }) =>
    wrongAnswer && !answerRight ? "#E70202" : "#12D202"};
`;
