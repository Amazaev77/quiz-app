const initialState = {
  items: {
    test: {
      id: 5,
      title: "",
      subtitle: ""
    },
    questions: [
      { 
        text: ""
      },
      { 
        text: ""
      }
    ],
    answers: [
      { 
        title: "",
        description: "",
        selected: false,
        qIndex: 0
      },
      { 
        title: "",
        description: "",
        selected: false,
        qIndex: 0
      }
    ]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'update/question':
      return {
        ...state,
        items: {
          ...state.items,
          questions: state.items.questions.map((question, index) => {
            return (index === action.payload.index) ?
              {
                ...question,
                text: action.payload.value
              }:
              {
                ...question
              }
          })
        }
      }
    case 'update/answer':
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer, index) => {
            return (index === action.payload.index) ?
              {
                ...answer,
                title: action.payload.value
              }:
              {
                ...answer
              }
          })
        }
      }
    case 'update/description':
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer, index) => {
            return (index === action.payload.index) ?
              {
                ...answer,
                description: action.payload.value
              }:
              {
                ...answer
              }
          })
        }
      }
    case 'update/checkbox':
      return {
        ...state,
        items: {
          ...state.items,
          answers: state.items.answers.map((answer, index) => {
            return (index === action.payload.index) ?
              {
                ...answer,
                selected: action.payload.value
              }:
              {
                ...answer
              }
          })
        }
      }
    default:
      return state;
  }
}

export const onChangeQuestion = (value, index) => {
  return dispatch => {
    dispatch({
      type: 'update/question',
      payload: { value, index }
    });
  };
}

export const onChangeAnswer = (value, index) => {
  return dispatch => {
    dispatch({
      type: 'update/answer',
      payload: { value, index }
    });
  };
}

export const onChangeDescription = (value, index) => {
  return dispatch => {
    dispatch({
      type: 'update/description',
      payload: { value,index }
    });
  }
}

export const onChangeCheckbox = (value, index) => {
  return dispatch => {
    dispatch({
      type: 'update/checkbox',
      payload: { value,index }
    });
  }
}



