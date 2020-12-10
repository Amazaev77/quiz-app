const initialState = {
  token: localStorage.getItem("auth-token"),
  authorizing: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/start":
      return {
        ...state,
        authorizing: true,
      };
    case "auth/succeed":
      return {
        ...state,
        authorizing: false,
        token: action.payload.token,
      };
    case "auth/failed":
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    default:
      return state;
  }
}

export const login = (login, password) => {
  return (dispatch) => {
    dispatch({ type: "auth/start" });

    fetch(`http://localhost:3010/admin/?login=${login}&password=${password}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.login === login && json.password === password) {
          localStorage.setItem("auth-token", json.token);
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
      });
  };
};
