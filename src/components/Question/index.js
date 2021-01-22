import React from "react";
import PileBox from "../PileBox";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { QuestionText, LengthQuestions } from "./style";
import { Content } from "../Lib/Lib";
import PreloaderQuestion from "./PreloaderQuestion";
import PreloaderAnswers from "./PreloaderAnswers";
import SwitchButton from "./SwitchButton";
import Answers from "./Answers";
import {filterQuestionSelector} from "../../redux/features/answers";

const Question = () => {
  const id = parseInt(useParams().id);

  const loadingQuestion = useSelector((state) => state.questions.loading);

  const loadingAnswer = useSelector((state) => state.answers.loading);

  const indexOfCurrentQuestion = useSelector(
    (state) => state.questions.indexOfCurrentQuestion
  );

  const questions = useSelector(filterQuestionSelector(id));

  const question = questions[indexOfCurrentQuestion];

  return (
    <Content>
      {loadingQuestion && <PreloaderQuestion />}
      <QuestionText>{question?.text}</QuestionText>
      {loadingAnswer && <PreloaderAnswers />}
      <Answers question={question} />
      <SwitchButton
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
