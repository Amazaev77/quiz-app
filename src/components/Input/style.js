import styled from 'styled-components';

export const StyledInput = styled.input`;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 32px;
  padding: 1em;
  outline: none;
  text-align: ${({ textAlign }) => textAlign ? "center": "start"};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const StyledWrapperInput = styled.div`
  text-align: ${({ textAlign }) => textAlign ? "center": "start"};
  position: relative;
  margin-top: 30px;
`;