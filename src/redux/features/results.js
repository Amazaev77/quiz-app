const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'results/save':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'results/clear':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

export function saveAnswer(results) {
  return {
    type: 'results/save',
    payload: results,
  };
}

export function clearResults() {
  return { type: 'results/clear' };
}
