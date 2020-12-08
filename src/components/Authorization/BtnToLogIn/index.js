import React from "react";
import PropTypes from "prop-types";
import {
  SpinnerForButton,
  BtnAuth,
  BoxForSpinner,
  ErrorBlock,
  WrapperError,
} from "./style";
import spinner from "../../../icons/spinner.svg";
import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/authorization";
import { useHistory } from "react-router-dom";

function BtnToLogIn({ text, pass }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state) => state.authorization.error);
  const authorizing = useSelector((state) => state.authorization.authorizing);

  const handleLogin = () => {
    history.push("/");
    dispatch(login(text, pass));
  };

  // const handleKeyDown = (e) => {
  //   if (e.keyCode === 13 && !token) {
  //     handleLogin();
  //   }
  // }

  return (
    <BtnAuth>
      <WrapperError>
        {error && !authorizing && (
          <ErrorBlock>Неверный логин или пароль</ErrorBlock>
        )}
      </WrapperError>
      {authorizing && (
        <BoxForSpinner>
          <SpinnerForButton src={spinner} alt="loading" />
        </BoxForSpinner>
      )}
      <Button
        onClick={handleLogin}
        disabled={authorizing}
        authorizing={authorizing}
      >
        Войти
      </Button>
    </BtnAuth>
  );
}

BtnToLogIn.propTypes = {
  text: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default BtnToLogIn;
