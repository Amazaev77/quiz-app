import React from 'react';
import { useSelector } from "react-redux";
import AddQuestion from "../AddQuestion";

const Questions = () => {
  const questions = useSelector(state => state.addTest.items.questions);

  return (
    questions.map((question, index) => (
      <AddQuestion 
        question={question}
        questionIndex={index}
        key={question.id}
      />
    ))
  )
}

export default Questions;