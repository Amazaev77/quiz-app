// Actions
const LOAD = 'tests/load';

const initialState = {
  loading: true,
  database: [],
}

// Reducer
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

// Action Creators
export function loadTests() {
  return (dispatch) => {
    dispatch({ type: `${LOAD}/started` });

    fetch('http://localhost:3010/tests/')
      .then(response => response.json())
      .then((tests) => {
        return dispatch({
          type: `${LOAD}/successes`,
          payload: tests
        })
      })
  };
}