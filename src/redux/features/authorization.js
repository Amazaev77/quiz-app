const SHOW = 'show/password';

const initialState = {
  token: "",
  authorizing: false,
  error: false,
  showPass: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        showPass: !state.showPass
      }
    default:
      return state;
  }
}

export const onToggleShowPassword = () => {
  return { type: SHOW }
}
