const LOAD = 'answers/load';
const UPDATE = 'answers/update';

const initialState = {
  loading: true,
  items: [],
  answerSelected: false,
  answerSelectedId: null
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
        items: action.payload
      }
    case UPDATE:
      return {
        ...state,
        answerSelected: true,
        answerSelectedId: action.payload
      }
    case `${UPDATE}/answers`:
      return {
        ...state,
        answerSelected: false
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

export function onSelectAnswer(id) {
  return {
    type: UPDATE,
    payload: id
  }
}
export function offSelectedAnswer() {
  return { type: `${UPDATE}/answers` }
}