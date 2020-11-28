import styled from 'styled-components';

export default styled.button`
  color: white;
  background: ${({authorizing}) => authorizing ? "rgb(120 139 177)" : "rgba(0, 51, 153, 1)"};
  cursor: ${({authorizing}) => authorizing ? "none" : "pointer"};
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 100%;
  outline: none;
  border: 0;
  margin-top: 30px;
`;