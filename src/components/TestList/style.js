import styled from "styled-components/";
import { Link } from "react-router-dom";

export const StyledTestList = styled.div`
  width: 1180px;
  margin: 35px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AddTestLink = styled(Link)`
  width: 570px;
  height: 260px;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.4);
`;
