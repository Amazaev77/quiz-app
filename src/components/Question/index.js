import React from "react";
import PileBox from "../PileBox";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { QuestionText, LengthQuestions } from "./style";
import { Content } from "../styled/Lib";
import PreloaderQuestion from "./PreloaderQuestion";
import PreloaderAnswers from "./PreloaderAnswers";
import SwitchButton from "./SwitchButton";
import Answers from "./Answers";

const Question = () => {
  const { id } = useParams();

  const loadingQuestion = useSelector((state) => state.questions.loading);
  const loadingAnswer = useSelector((state) => state.answers.loading);
  const indexOfCurrentQuestion = useSelector(
    (state) => state.questions.indexOfCurrentQuestion
  );

  const questions = useSelector((state) =>
    state.questions.items.filter((item) => item.testId.toString() === id)
  );
  const question = questions[indexOfCurrentQuestion];

  return (
    <Content>
      {loadingQuestion && <PreloaderQuestion />}
      <QuestionText>{question?.text}</QuestionText>
      {loadingAnswer && <PreloaderAnswers />}
      <Answers question={question} />
      <SwitchButton
        questions={questions}
        indexOfCurrentQuestion={indexOfCurrentQuestion}
      />
      {!loadingAnswer && (
        <LengthQuestions>
          {indexOfCurrentQuestion + 1}/{questions.length}
        </LengthQuestions>
      )}
      <PileBox />
    </Content>
  );
};

export default Question;
