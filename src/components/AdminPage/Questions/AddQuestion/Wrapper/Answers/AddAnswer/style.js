import styled from "styled-components";

export const NumberText = styled.div`
  color: #e5e5e5;
  font-size: 18px;
  margin: 0 25px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  &[type="checkbox"] {
    display: none;
  }
`;

export const Label = styled.label`
  font-size: 28px;
  cursor: pointer;
  padding-left: 20px;
  &::before {
    content: "";
    display: inline-block;
    border: 1px solid rgba(0, 51, 153, 0.5);
    vertical-align: middle;
    border-radius: 3px;
    margin-right: 15px;
    width: 28px;
    height: 29px;
  }
`;

export const Check = styled.img`
  position: relative;
  right: 464px;
  top: 2px;
  pointer-events: none;
`;

export const SubTextTextarea = styled.div`
  font-size: 18px;
  margin: 7px 0 45px 25px;
  color: #999999;
`;
