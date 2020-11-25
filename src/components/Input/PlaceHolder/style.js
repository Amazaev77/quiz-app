import styled from 'styled-components';

export const StyledPlaceHolder = styled.div`
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  font-size: ${({ focus, value }) => focus || value?.length > 0 ? "18px" : "32px"};
  width: 100%;
  text-align: ${({textAlign}) => textAlign ? "center" : "start"};
  top: ${({ focus }) => focus ? "0.2em" : "1em"};
  pointer-events: none;
  transition: font-size 350ms;
`;