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
    case 'auth/start':
      return {
        ...state,
        authorizing: true
      }
    case 'auth/succeed':
      return {
        ...state,
        authorizing: false,
        token: action.payload.token
      }
    case 'auth/failed':
      return {
        ...state,
        authorizing: false,
        error: true
      }
    default:
      return state;
  }
}

export const onToggleShowPassword = () => {
  return { type: SHOW };
}

export const login = (login, password) => {
  return dispatch => {
    dispatch({ type: 'auth/start' });

    fetch('http://localhost:3010/admin')
      .then(response => response.json())
      .then(json => {
        const random = Math.random();

        if (random > 0.5) {
          dispatch({
            type: "auth/succeed",
            payload: json

          });
        } else {
          dispatch({
            type: "auth/failed",
            payload: json
          });
        }
      })
  }
}
