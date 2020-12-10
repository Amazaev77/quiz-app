const initialState = {
  loading: true,
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'tests/load/started':
      return {
        ...state,
        loading: false,
      };

    case 'tests/load/succeed':
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
    dispatch({ type: 'tests/load/started' });

    fetch("http://localhost:3010/tests/")
      .then((response) => response.json())
      .then((tests) => {
        return dispatch({
          type: 'tests/load/succeed',
          payload: tests,
        });
      });
  };
}
