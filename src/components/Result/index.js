import React from "react";
import Button from "../Button";
import PileBox from "../PileBox";
import { ResultText, ResultComment, InTestList } from "./style.js";
import { Content, BtnBox } from "../styled/Lib";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearResults } from "../../redux/features/results";
import { unSelectAnswer } from "../../redux/features/answers";

const Result = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const results = useSelector((state) => state.results.items);
  const filteredRightAnswers = results.filter((item) => item.right);
  const testId = results[0].testId;

  const onToggleMenu = () => {
    history.push("/");
    dispatch(clearResults());
      dispatch(unSelectAnswer());
  };

  const startOverHandler = () => {
    history.push(`/${testId}/questions`);
    dispatch(clearResults());
    dispatch(unSelectAnswer());
  };

  return (
    <Content>
      <ResultText>
        Результат {filteredRightAnswers.length} из {results.length}.
      </ResultText>
      <ResultComment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </ResultComment>
      <BtnBox>
        <Button onClick={startOverHandler}>Начать заново</Button>
      </BtnBox>
      <InTestList onClick={onToggleMenu}>Перейти к списку тестов</InTestList>
      <PileBox />
    </Content>
  );
};

export default Result;
