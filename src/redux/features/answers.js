const initialState = {
  loading: false,
  items: [],
  answerSelected: false,
  answerSelectedId: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'answers/load/started':
      return {
        ...state,
        loading: true,
      };

    case 'answers/load/succeed':
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case 'select/answer':
      return {
        ...state,
        answerSelected: true,
        answerSelectedId: action.payload
      };

    case 'un/select/answer':
      return {
        ...state,
        answerSelected: false,
        items: []
      };

    default:
      return state;
  }
}

export function selectAnswer(id) {
  return {
    type: 'select/answer',
    payload: id
  };
}

export function unSelectAnswer() {
  return { type: 'un/select/answer' };
}

export function loadAnswers(id) {
  return (dispatch) => {
    dispatch({ type: 'answers/load/started' });

    fetch(`/answers?questionId=${id}`)
      .then((response) => response.json())
      .then((answers) => {
        return dispatch({
          type: 'answers/load/succeed',
          payload: answers
        });
      });
  };
}

export const filterQuestionSelector = (id) => {
  return state => {
    return state.questions.items.filter((item) => item.testId === id)
  }
}
