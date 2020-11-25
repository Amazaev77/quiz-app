import React, { useState } from "react";
import { StyledAuthorization, AuthText, BtnAuth } from './style'
import Button from '../Button';
import { useSelector } from 'react-redux';
import Input from '../Input';
import Icon from '../Icon';

const Authorization = () => {
  const showPass = useSelector(state => state.authorization.showPass);

  const [text, setText] = useState("");

  return (
    <StyledAuthorization>
      <AuthText>
        Авторизация
      </AuthText>
        <Input
          value={text}
          textAlign={"center"}
          placeHolder="Введите логин"
          onChange={setText}
        />
        <Input
          type={showPass ? 'text': 'password'}
          textAlign={"center"}
          placeHolder="Введите пароль"
        />
      <Icon />
      <BtnAuth>
        <Button>
          Войти
        </Button>
      </BtnAuth>
    </StyledAuthorization>
  )
}

export default Authorization;