import styled from "styled-components";

export const StyledPlaceHolder = styled.div`
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  font-size: ${({ focus, value, miniSize }) => (
    (focus || value.length > 0) ? (
      miniSize ? "16px": '18px'
    ) : (
      miniSize ? '27px' : '32px'
    )
  )};
  width: 100%;
  text-align: ${({ textAlign }) => (textAlign ? "center" : "start")};
  top: ${({ focus, value, miniSize }) => (
    (focus || value.length > 0) ? (
      miniSize ? "3px": '6px'
    ) : (
      miniSize ? "19px" : "32px"
    )
  )};
  left: ${({ textAlign }) => !textAlign && "20px"};
  pointer-events: none;
  transition: font-size 350ms;
`;
