import styled from "styled-components";

export const StyledAdminPage = styled.div`
  width: 1110px;
  margin: auto;
`;

export const NumMax = styled.div`
  font-weight: 400;
  color: ${({ test }) =>
    test.title.length > 100 ? "#E70202" : "rgba(0, 0, 0, 0.4)"};
  margin: 5px 0 0 30px;
`;

export const TextQuestions = styled.div`
  font-weight: 500;
  font-size: 36px;
  margin: 60px 0 15px 0;
`;
