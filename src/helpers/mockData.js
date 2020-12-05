import { v4 as uuidv4 } from 'uuid';

export const generateQuestionObject = () => {
  return {
    id: uuidv4(),
    text: ""
  }
}

export const generateAnswerObject = (qIndex) => {
  return {
    id: uuidv4(),
    title: "",
    description: "",
    right: false,
    qIndex: qIndex
  }
}