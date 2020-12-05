import React, { useState } from "react";
import { StyledAuthorization } from "./style";
import { useSelector } from "react-redux";
import TextField from "../TextField";
import { TitlePage } from "../styled/Lib";
import BtnToLogIn from "./BtnToLogIn";
// import Icon from '../Icon';

const Authorization = () => {
  const showPass = useSelector((state) => state.authorization.showPass);

  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  return (
    <StyledAuthorization>
      <TitlePage>Авторизация</TitlePage>
      <TextField
        value={text}
        onChange={setText}
        textAlign={"center"}
        placeHolder="Введите логин"
      />
      <TextField
        value={pass}
        onChange={setPass}
        type={showPass ? "text" : "password"}
        textAlign={"center"}
        placeHolder="Введите пароль"
      />
      {/*<Icon />*/}
      <BtnToLogIn text={text} pass={pass} />
    </StyledAuthorization>
  );
};

export default Authorization;
