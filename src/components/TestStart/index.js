import React from "react";
import PileBox from "../PileBox";
import Button from "../Button";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Title, Subtitle, LengthQuestions } from "./style";
import { useHistory } from "react-router-dom";
import { Content, BtnBox } from "../styled/Lib";

const TestStart = () => {
  const paramsId = useParams().id;

  let history = useHistory();

  const test = useSelector((state) =>
    state.tests.items.find((item) => item.id.toString() === paramsId)
  );

  const questions = useSelector((state) =>
    state.questions.items.filter((item) => item.testId.toString() === paramsId)
  );

  function handleClick() {
    history.push(`/${paramsId}/1`);
  }

  return (
    <Content>
      <Title>{test?.title}</Title>
      <Subtitle>{test?.subtitle}</Subtitle>
      <BtnBox>
        <Button onClick={handleClick}>Начать тест</Button>
      </BtnBox>
      <LengthQuestions>В тесте {questions.length} вопросов</LengthQuestions>
      <PileBox />
    </Content>
  );
};

export default TestStart;