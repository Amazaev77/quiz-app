const LOAD = 'answers/load';

const initialState = {
  loading: true,
  database: [],
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

export function loadAnswers(id) {
  return (dispatch) => {
    dispatch({ type: `${LOAD}/started` });

    fetch(`http://localhost:3010/answers?questionId=${id}`)
      .then(response => response.json())
      .then((answers) => {
        return dispatch({
          type: `${LOAD}/successes`,
          payload: answers
        })
      })
  };
}