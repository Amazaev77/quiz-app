const initialState = {
  loading: false,
  items: [],
  indexOfCurrentQuestion: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'questions/load/started':
      return {
        ...state,
        loading: true,
      };

    case 'questions/load/succeed':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'questions/update':
      return {
        ...state,
        indexOfCurrentQuestion: state.indexOfCurrentQuestion + 1,
      };

    case 'index/reset':
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
    dispatch({ type: 'questions/load/started' });

    fetch("/questions")
      .then((response) => response.json())
      .then((questions) => {
        return dispatch({
          type: 'questions/load/succeed',
          payload: questions,
        });
      });
  };
}

export function nextQuestion() {
  return { type: 'questions/update' };
}

export function resetIndex() {
  return { type: 'index/reset' };
}
