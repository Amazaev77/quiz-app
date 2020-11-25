import React from "react";
import { StyledAuthorization, AuthText, BtnAuth } from './style'
import Button from '../Button';
import { useSelector } from 'react-redux';
import Input from '../Input';
import Icon from '../Icon';

const Authorization = () => {
  const showPass = useSelector(state => state.authorization.showPass);

  return (
    <StyledAuthorization>
      <AuthText>
        Авторизация
      </AuthText>
        <Input
          textAlign={"center"}
          placeHolder="Введите логин"
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