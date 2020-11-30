const SAVE = "results/save";
const CLEAR = "results/clear";

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case CLEAR:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

export function onSaveAnswer(results) {
  return {
    type: SAVE,
    payload: results,
  };
}

export function clearResults() {
  return { type: CLEAR };
}
