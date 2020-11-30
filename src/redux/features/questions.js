const LOAD = "questions/load";
const UPDATE = "questions/update";
const RESET = "index/reset";

const initialState = {
  loading: false,
  items: [],
  indexOfCurrentQuestion: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${LOAD}/started`:
      return {
        ...state,
        loading: true,
      };

    case `${LOAD}/succeed`:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case UPDATE:
      return {
        ...state,
        indexOfCurrentQuestion: state.indexOfCurrentQuestion + 1,
      };

    case RESET:
      return {
        ...state,
        indexOfCurrentQuestion: 0,
      };

    default:
      return state;
  }
}

export function loadQuestions() {
  return (dispatch) => {
    dispatch({ type: `${LOAD}/started` });

    fetch("http://localhost:3010/questions")
      .then((response) => response.json())
      .then((questions) => {
        return dispatch({
          type: `${LOAD}/succeed`,
          payload: questions,
        });
      });
  };
}

export function onNextQuestion() {
  return { type: UPDATE };
}

export function onResetIndex() {
  return { type: RESET };
}
