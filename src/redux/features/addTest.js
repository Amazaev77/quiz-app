const initialState = {
  items: {
    test: {
      title: "",
      subtitle: ""
    },
    questions: [
      { 
        text: ""
      },
    ],
    answers: [
      { 
        title: "",
        description: "",
        right: false,
        qIndex: 0
      },
      { 
        title: "",
        description: "",
        right: false,
        qIndex: 0
      }
    ]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'update/title': 
      return {
        ...state,
        items: {
          ...state.items,
          test: {
            ...state.items.test,
            title: action.payload
          }
        }
      }
    case 'update/subtitle':
    return {
      ...state,
      items: {
        ...state.items,
        test: {
          ...state.items.test,
          subtitle: action.payload
        }
      }
    }  
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
                right: !answer.right
              }:
              {
                ...answer
              }
          })
        }
      }
    case 'add/answer': 
      return {
        ...state,
        items: {
          ...state.items,
          answers: [
            ...state.items.answers,
            action.payload
          ]
        }
      }
    case 'add/question': 
      return {
        ...state,
        items: {
          ...state.items,
          questions: [
            ...state.items.questions,
            action.payload.question
          ],
          answers: [
            ...state.items.answers,
            ...action.payload.answers
          ]
        }
    }
    default:
      return state;
  }
}

export const onChangeTestTitle = (value) => {
  return {
    type: 'update/title',
    payload: value
  };
}

export const onChangeTestSubtitle = (value) => {
  return {
    type: 'update/subtitle',
    payload: value
  };
}

export const onChangeQuestion = (value, index) => {
  return {
      type: 'update/question',
      payload: { value, index }
  };
}

export const onChangeAnswer = (value, index) => {
  return {
    type: 'update/answer',
    payload: { value, index }
  };
}

export const onChangeDescription = (value, index) => {
  return {
    type: 'update/description',
    payload: { value, index }
  };
}

export const onChangeCheckbox = (value, index) => {
  return { 
    type: 'update/checkbox',
    payload: { value, index } 
  };
}
export const onAddAnswer = (qIndex) => {
  return {
    type: 'add/answer',
    payload: { 
      title: "",
      description: "",
      right: false,
      qIndex
    }
  };
}

export const onAddQuestion = (qIndex) => {
  return {
    type: 'add/question',
    payload: { 
      question: {
        text: ""
      },
      answers: [
        { 
          title: "",
          description: "",
          right: false,
          qIndex: qIndex + 1
        },
        { 
          title: "",
          description: "",
          right: false,
          qIndex: qIndex + 1
        }
      ]
    }
  };
}



