import React, { useState } from "react";
import { NumMax, StyledAdminPage, TextQuestions } from "./style";
import { TitlePage } from "../styled/Lib";
import TextField from "../TextField";
import Questions from './Questions';

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <StyledAdminPage>
      <TitlePage>Добавление нового теста</TitlePage>
      <TextField
        value={title}
        onChange={setTitle}
        placeHolder="Введите заголовок"
      />
      <NumMax>
        Максимум 100 символов (осталось 100)
      </NumMax>
      <TextField
        textarea={true}
        value={text}
        onChange={setText}
        placeHolder="Вводный текст"
      />
      <TextQuestions>
        Вопросы
       </TextQuestions>
      <Questions />
      
    </StyledAdminPage>
  );
};

export default AdminPage;
