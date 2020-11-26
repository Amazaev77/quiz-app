import styled, { keyframes } from 'styled-components'

export const StyledAuthorization = styled.div`
  max-width: 1110px;
  margin: auto;
  position: relative;
`;

export const AuthText = styled.div`
  font-weight: 500;
  font-size: 48px;
  margin: 30px 0;
`;

export const BtnAuth = styled.div`
  padding: 0 308px;
  font-size: 32px;
`;

const ErrorBlockAnimate = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 23px;
    opacity: 1;
  }
`;

export const ErrorBlock = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 15px;
  color: #E70202;
  animation: ${ErrorBlockAnimate} 150ms ease-in forwards;
`;

