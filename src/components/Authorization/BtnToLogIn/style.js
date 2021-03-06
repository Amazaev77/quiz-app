import styled, { keyframes } from "styled-components";

export const BtnAuth = styled.div`
  padding: 0 308px;
  font-size: 32px;
`;

const ErrorBlockAnimate = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ErrorBlock = styled.div`
  text-align: center;
  margin-top: ${({error}) => error && '10px'};
  font-size: 20px;
  color: #e70202;
  animation: ${ErrorBlockAnimate} 150ms ease-in forwards;
`;

export const WrapperError = styled.div`
  height: 23px;
  margin-top: 15px;
`;

export const BoxForSpinner = styled.div`
  position: absolute;
  bottom: 4px;
  right: 514px;
`;

const animateSpinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerForButton = styled.img`
  animation: ${animateSpinner} infinite 300ms linear;
`;
