const initialState = {
  items: {
    test: {
      id: 5,
      title: "",
      subtitle: ""
    },
    questions: [
      { 
        id: 6,
        text: ""
      },
      { 
        id: 7,
        text: ""
      }
    ],
    answers: [
      { 
        id: 21,
        title: "",
        selected: false
      }
    ]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}


