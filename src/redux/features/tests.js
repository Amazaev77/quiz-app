// Actions
const LOAD = "tests/load";

const initialState = {
  loading: true,
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${LOAD}/started`:
      return {
        ...state,
        loading: false,
      };

    case `${LOAD}/succeed`:
      return {
        ...state,
        loading: true,
        items: action.payload,
      };

    default:
      return state;
  }
}

export function loadTests() {
  return (dispatch) => {
    dispatch({ type: `${LOAD}/started` });

    fetch("http://localhost:3010/tests/")
      .then((response) => response.json())
      .then((tests) => {
        return dispatch({
          type: `${LOAD}/succeed`,
          payload: tests,
        });
      });
  };
}
