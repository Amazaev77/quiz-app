const LOAD = 'questions/load';

const initialState = {
  loading: true,
  database: [],
  activeQuestion: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}/started`:
      return {
        ...state,
        loading: false,
      }
    case `${LOAD}/successes`:
      return {
        ...state,
        loading: true,
        database: action.payload
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
          type: `${LOAD}/successes`,
          payload: questions
        })
      })
  };
}