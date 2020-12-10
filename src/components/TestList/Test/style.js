import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTestLink = styled(Link)`
  width: 570px;
  height: 260px;
  margin-bottom: 40px;
  padding: 32px 30px 26px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TestName = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: rgba(0, 0, 0, 1);
`;

export const LengthQuestions = styled.div`
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
`;
