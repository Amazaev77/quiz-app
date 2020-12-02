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
        selected: false,
        qIndex: 0
      },
      { 
        title: "",
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
        questions: state.items.questions.map((question, index) => {
          if (index === action.payload.index) {
            return {
              ...question,
              text: action.payload.value
            }

          }
        })
      }
    default: return state;
  }
}

export const onChangeQuestion = (value, index) => {
  return dispatch => {
    dispatch({
      type: 'update/question',
      payload: { value, index }
    })
  };
}

