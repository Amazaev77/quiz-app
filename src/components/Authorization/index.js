import React, { useState } from "react";
import { StyledAuthorization, AuthText, BtnAuth, ErrorBlock } from './style'
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input';
import { login } from '../../redux/features/authorization'
// import Icon from '../Icon';

const Authorization = () => {
  const dispacth = useDispatch();

  const showPass = useSelector(state => state.authorization.showPass);
  const error = useSelector(state => state.authorization.error);

  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    dispacth(login(text, pass));
  }

  return (
    <StyledAuthorization>
      <AuthText>
        Авторизация
      </AuthText>
        <Input
          value={text}
          onChange={setText}
          textAlign={"center"}
          placeHolder="Введите логин"
        />
        <Input
          value={pass}
          onChange={setPass}
          type={showPass ? 'text': 'password'}
          textAlign={"center"}
          placeHolder="Введите пароль"
        />
      {/*<Icon />*/}
      <BtnAuth>
        {error && (
          <ErrorBlock>
            Неверный логин или пароль
          </ErrorBlock>
        )}
        <Button onClick={handleLogin}>
          Войти
        </Button>
      </BtnAuth>
    </StyledAuthorization>
  )
}

export default Authorization;