import React, { useState } from "react";
import {NumMax, StyledAdminPage} from "./style";
import { TitlePage } from "../styled/Lib";
import TextField from "../TextField";
import AddQuestion from "./AddQuestion";

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
      <AddQuestion />
    </StyledAdminPage>
  );
};

export default AdminPage;
