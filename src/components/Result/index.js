import React from "react";
import Button from "../Button";
import PileBox from "../PileBox";
import { ResultText, ResultComment, BtnBox, InTestList } from "./style.js";
import { Content } from "../styled/Lib";

const Result = () => {
  return (
    <Content>
      <ResultText>Результат 4 из 8.</ResultText>
      <ResultComment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </ResultComment>
      <BtnBox>
        <Button>Начать заново</Button>
      </BtnBox>
      <InTestList>Перейти к списку тестов</InTestList>
      <PileBox />
    </Content>
  );
};

export default Result;