import React, { useState } from "react";
import { StyledAuthorization } from "./style";
import TextField from "../TextField";
import { TitlePage } from "../styled/Lib";
import BtnToLogIn from "./BtnToLogIn";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const Authorization = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  const token = useSelector(state => state.authorization.token);

  if (token) {
    return <Redirect to='/'/>
  }

  return (
    <StyledAuthorization>
      <TitlePage>Авторизация</TitlePage>
      <form>
        <TextField
          value={text}
          onChange={setText}
          textAlign="center"
          placeHolder="Введите логин"
        />
        <TextField
          value={pass}
          onChange={setPass}
          type="password"
          textAlign="center"
          placeHolder="Введите пароль"
        />
        <BtnToLogIn text={text} pass={pass} />
      </form>
    </StyledAuthorization>
  );
};

export default Authorization;
