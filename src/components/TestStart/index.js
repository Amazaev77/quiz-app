import React from "react";
import PileBox from "../PileBox";
import Button from "../Button";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Title, Subtitle, LengthQuestions } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { Content, BtnBox } from "../styled/Lib";

const TestStart = () => {
  const id = parseInt(useParams().id);

  const history = useHistory();

  const test = useSelector((state) =>
    state.tests.items.find((test) => test.id === id)
  );

  const questions = useSelector((state) =>
    state.questions.items.filter((question) => question.testId === id)
  );

  function handleClick() {
    history.push(`/${id}/questions`);
  }

  // Перекидывает на главную страницу, если элемент c таким id не найден
  if (!test) {
    return <Redirect to="/" />;
  }

  return (
    <Content>
      <Title>{test.title}</Title>
      <Subtitle>{test.subtitle}</Subtitle>
      <BtnBox>
        <Button onClick={handleClick}>Начать тест</Button>
      </BtnBox>
      <LengthQuestions>В тесте {questions.length} вопросов</LengthQuestions>
      <PileBox />
    </Content>
  );
};

export default TestStart;
