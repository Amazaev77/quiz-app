import styled from "styled-components";

export const StyledAddAnswer = styled.div`
  
`;

export const WrapperNumberAnswer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Border = styled.div`
  border-top: 1px solid #E5E5E5;
  flex: 1;
  align-self: center;
`;

export const NumberText = styled.div`
  color: #E5E5E5;
  font-size: 18px;
  margin: 0 25px;
`;

export const Checkbox = styled.input`
  &[type="checkbox"] {
    display: none;
  }
  &[type="checkbox"]:checked + label::before {
    content: '';
  }
`;

export const Label = styled.label`
  font-size: 28px;
  cursor: pointer;
  padding-left: 20px;
  &::before {
    content: '';
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
  right: 467px;
  top: 4px;
  cursor: pointer;
`;

export const SubTextTextarea = styled.div`
  font-size: 18px;
  margin: 7px 0 45px 25px;
  color: #999999;
`;