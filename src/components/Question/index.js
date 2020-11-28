import React, { useEffect } from "react";
import Answer from "./Answer";
import PileBox from "../PileBox";
import Button from "../Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuestionText, LengthQuestions } from "./style";
import { Content, BtnBox } from "../styled/Lib";
import { loadAnswers, offSelectedAnswer } from "../../redux/features/answers";
import { onNextQuestion, onResetIndex } from '../../redux/features/questions'
import PreloaderQuestion from './PreloaderQuestion';
import PreloaderAnswers from './PreloaderAnswers'

const Question = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let history = useHistory();


  const indexOfCurrentQuestion = useSelector((state) => state.questions.indexOfCurrentQuestion);
  const answerSelected = useSelector((state) => state.answers.answerSelected);

  const questions = useSelector((state) =>
    state.questions.items.filter((item) => item.testId.toString() === id)
  );
  const loadingQuestion = useSelector(state => state.questions.loading);
  const loadingAnswer = useSelector(state => state.answers.loading);

  const question = questions[indexOfCurrentQuestion];

  useEffect(() => {
    dispatch(loadAnswers(question?.id));
  }, [dispatch, question?.id]);

  const answers = useSelector((state) => state.answers.items);

  const onTogglePage = () => {
    dispatch(offSelectedAnswer());

    if (indexOfCurrentQuestion + 1 < questions.length) {
      dispatch(onNextQuestion());
    } else {
        history.push(`/${id}/result`);
        dispatch(onResetIndex());
    }
  };

  return (
    <Content>
      {loadingQuestion && <PreloaderQuestion />}
      <QuestionText>{question?.text}</QuestionText>
      {loadingAnswer && <PreloaderAnswers />}
      {answers.map((answer) => (
        <Answer
          key={answer.id}
          answer={answer}
          questionId={question.id}
        />
      ))}
      {answerSelected && (
        <BtnBox>
          <Button onClick={onTogglePage}>
            {indexOfCurrentQuestion !== (questions.length - 1) ? "Далее" : "Завершить"}
          </Button>
        </BtnBox>
      )}
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
