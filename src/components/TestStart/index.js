import React from "react";
import PileBox from "../PileBox";
import Button from "../Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Title, Subtitle, LengthQuestions } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { Content, BtnBox } from "../styled/Lib";
import { offSelectedAnswer } from '../../redux/features/answers'

const TestStart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let history = useHistory();

  const test = useSelector((state) =>
    state.tests.items.find((item) => item.id.toString() === id)
  );

  const questions = useSelector((state) =>
    state.questions.items.filter((item) => item.testId.toString() === id)
  );

  function handleClick() {
    history.push(`/${id}/questions`);
    dispatch(offSelectedAnswer());
  }

  if(!test) {
    return <Redirect to="/" />
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