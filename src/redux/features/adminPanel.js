import {
  generateQuestionObject,
  generateAnswerObject,
} from "../../helpers/generateMockData";

const initialState = {
  loading: false,
  test: {
    title: "",
    subtitle: "",
  },
  questions: [generateQuestionObject()],
  answers: [generateAnswerObject(0), generateAnswerObject(0)],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "update/title":
      return {
        ...state,
        test: {
          ...state.test,
          title: action.payload,
        },
      };
    case "update/subtitle":
      return {
        ...state,
        test: {
          ...state.test,
          subtitle: action.payload,
        },
      };
    case "update/question":
      return {
        ...state,
        questions: state.questions.map((question, index) => {
          if (index === action.payload.index) {
            return {
              ...question,
              text: action.payload.value,
            };
          } else {
            return question;
          }
        }),
      };
    case "update/answer":
      return {
        ...state,
        answers: state.answers.map((answer) => {
          if (answer.id === action.payload.id) {
            return {
              ...answer,
              title: action.payload.value,
            };
          } else {
            return answer;
          }
        }),
      };
    case "update/description":
      return {
        ...state,
        answers: state.answers.map((answer) => {
          if (answer.id === action.payload.id) {
            return {
              ...answer,
              description: action.payload.value,
            };
          } else {
            return answer;
          }
        }),
      };
    case "update/checkbox":
      return {
        ...state,
        answers: state.answers.map((answer) => {
          if (answer.id === action.payload.answerId) {
            return {
              ...answer,
              right: !answer.right,
            };
          } else {
            return answer;
          }
        }),
      };
    case "add/answer":
      return {
        ...state,
        answers: [...state.answers, generateAnswerObject(action.payload)],
      };
    case "add/question":
      return {
        ...state,
        questions: [...state.questions, generateQuestionObject()],
        answers: [
          ...state.answers,
          generateAnswerObject(action.payload + 1),
          generateAnswerObject(action.payload + 1),
        ],
      };
    case "add/test/start":
      return {
        ...state,
        loading: true
      };
    case "add/test/succeed":
      return {
        ...state,
        loading: false,
        test: {
          title: "",
          subtitle: "",
        },
        questions: [generateQuestionObject()],
        answers: [generateAnswerObject(0), generateAnswerObject(0)],
      }
    default:
      return state;
  }
}

export const changeTestTitle = (value) => {
  return {
    type: "update/title",
    payload: value,
  };
};

export const changeTestSubtitle = (value) => {
  return {
    type: "update/subtitle",
    payload: value,
  };
};

export const changeQuestion = (value, index) => {
  return {
    type: "update/question",
    payload: { value, index },
  };
};

export const changeAnswer = (value, id) => {
  return {
    type: "update/answer",
    payload: { value, id },
  };
};

export const changeDescription = (value, id) => {
  return {
    type: "update/description",
    payload: { value, id },
  };
};

export const addAnswer = (qIndex) => {
  return {
    type: "add/answer",
    payload: qIndex,
  };
};

export const addQuestion = (qIndex) => {
  return {
    type: "add/question",
    payload: qIndex,
  };
};

export const changeCheckbox = (value, answerId) => {
  return {
    type: "update/checkbox",
    payload: { value, answerId },
  };
};

export const addTest = () => {
  return (dispatch, getState) => {
    const { test, questions, answers } = getState().adminPanel;

    dispatch({ type: "add/test/started" });
    fetch("/tests", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: test.title,
        subtitle: test.subtitle,
      }),
    })
      .then((res) => res.json())
      .then((test) =>
        questions.forEach((question) =>
          fetch("/questions", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              testId: test.id,
              text: question.text,
            }),
          })
            .then((res) => res.json())
            .then((json) =>
              answers.forEach((answer) =>
                fetch("/answers", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    questionId: json.id,
                    title: answer.title,
                    description: answer.description,
                    right: answer.right,
                  }),
                })
              )
            )
        )
      );
    dispatch({ type: "add/test/succeed" });
  };
};
