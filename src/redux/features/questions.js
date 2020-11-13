const LOAD = 'questions/load';
const UPDATE = 'questions/update';

const initialState = {
  loading: true,
  items: [],
  activeQuestion: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}/started`:
      return {
        ...state,
        loading: false,
      }
    case `${LOAD}/succeed`:
      return {
        ...state,
        loading: true,
        items: action.payload
      }
    case UPDATE:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1
      }
    default: return state;
  }
}

export function loadQuestions() {
  return (dispatch) => {
    dispatch({ type: `${LOAD}/started` });

    fetch('http://localhost:3010/questions')
      .then(response => response.json())
      .then((questions) => {
        return dispatch({
          type: `${LOAD}/succeed`,
          payload: questions
        })
      })
  };
}

export function onNextQuestion() {
  return { type: UPDATE };
}