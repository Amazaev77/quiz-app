import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: ${({miniSize}) => miniSize ? "70px" : "100px"};
  border: 0;
  font-size: ${({miniSize}) => miniSize ? "27px" : "32px"};
  padding: 1em;
  outline: none;
  text-align: ${({ textAlign }) => (textAlign ? "center" : "start")};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: ${({miniSize}) => miniSize ? "140px" : "200px"};
  border: 0;
  font-size: ${({miniSize}) => miniSize ? "27px" : "32px"};
  padding: 1em;
  outline: none;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  resize: none;
`;

export const StyledWrapperTextField = styled.div`
  text-align: ${({ textAlign }) => (textAlign ? "center" : "start")};
  position: relative;
  margin-top: 30px;
`;
