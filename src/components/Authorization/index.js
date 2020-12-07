import React, { useState } from "react";
import { StyledAuthorization } from "./style";
import TextField from "../TextField";
import { TitlePage } from "../styled/Lib";
import BtnToLogIn from "./BtnToLogIn";

const Authorization = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <StyledAuthorization>
      <TitlePage>Авторизация</TitlePage>
      <TextField
        value={text}
        onChange={setText}
        textAlign="center"
        placeHolder="Введите логин"
      />
      <TextField
        value={pass}
        onChange={setPass}
        type={showPass ? "text" : "password"}
        textAlign="center"
        placeHolder="Введите пароль"
      />
      {/*
        Нужно будет перенести иконку в компонент,
        но с этим небольшие проблемы оставил на потом
       */}
      {/*<Icon />*/}
      <BtnToLogIn text={text} pass={pass} />
    </StyledAuthorization>
  );
};

export default Authorization;
