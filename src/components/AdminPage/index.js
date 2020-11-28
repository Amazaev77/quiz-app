import React, { useState } from 'react'
import { StyledAdminPage } from "./style";
import { TitlePage } from '../styled/Lib'
import Input from '../Input';
import TextArea from './TextArea'

const AdminPage = () => {
  const [text, setText] = useState("");

  return (
    <StyledAdminPage>
      <TitlePage>
        Добавление нового теста
      </TitlePage>
      <Input
        value={text}
        onChange={setText}
        placeHolder="Введите заголовок"
      />
      <TextArea
        placeholder="Введите текст вопроса"
      />
    </StyledAdminPage>
  );
}

export default AdminPage;