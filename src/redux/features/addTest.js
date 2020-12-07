import {
  generateQuestionObject,
  generateAnswerObject,
} from "../../helpers/mockData";

const initialState = {
  items: {
    test: {
      title: "",
      subtitle: "",
    },
    questions: [generateQuestionObject()],
    answers: [generateAnswerObject(0), generateAnswerObject(0)],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "update/title":
      return {
        ...state,
        items: {
          ...state.items,
          test: {
            ...state.items.test,
            title: action.payload,
          },
        },
      };
    case "update/subtitle":
      return {
        ...state,
        items: {
          ...state.items,
          test: {
            ...state.items.test,
            subtitle: action.payload,
          },
        },
      };
    case "update/question":
      return {
        ...state,
        items: {
          ...state.items,
          questions: state.items.questions.map((question, index) => {
            return index === action.payload.index
              ? {
                  ...question,
                  text: action.payload.value,
                }
              : {
                  ...question,
                };
          }),
        },
      };
    case "update/answer":
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer, index) => {
            return index === action.payload.index
              ? {
                  ...answer,
                  title: action.payload.value,
                }
              : {
                  ...answer,
                };
          }),
        },
      };
    case "update/description":
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer, index) => {
            return index === action.payload.index
              ? {
                  ...answer,
                  description: action.payload.value,
                }
              : {
                  ...answer,
                };
          }),
        },
      };
    case "update/checkbox":
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer) => {
            return answer.id === action.payload.answerId
              ? {
                  ...answer,
                  right: !answer.right,
                }
              : {
                  ...answer,
                };
          }),
        },
      };
    case "add/answer":
      return {
        ...state,
        items: {
          ...state.items,
          answers: [
            ...state.items.answers,
            generateAnswerObject(action.payload),
          ],
        },
      };
    case "add/question":
      return {
        ...state,
        items: {
          ...state.items,
          questions: [...state.items.questions, generateQuestionObject()],
          answers: [
            ...state.items.answers,
            generateAnswerObject(action.payload + 1),
            generateAnswerObject(action.payload + 1),
          ],
        },
      };
    default:
      return state;
  }
}

export const onChangeTestTitle = (value) => {
  return {
    type: "update/title",
    payload: value,
  };
};

export const onChangeTestSubtitle = (value) => {
  return {
    type: "update/subtitle",
    payload: value,
  };
};

export const onChangeQuestion = (value, index) => {
  return {
    type: "update/question",
    payload: { value, index },
  };
};

export const onChangeAnswer = (value, index) => {
  return {
    type: "update/answer",
    payload: { value, index },
  };
};

export const onChangeDescription = (value, index) => {
  return {
    type: "update/description",
    payload: { value, index },
  };
};

export const onAddAnswer = (qIndex) => {
  return {
    type: "add/answer",
    payload: qIndex,
  };
};
export const onAddQuestion = (qIndex) => {
  return {
    type: "add/question",
    payload: qIndex,
  };
};

export const onChangeCheckbox = (value, answerId) => {
  return {
    type: "update/checkbox",
    payload: { value, answerId },
  };
};
