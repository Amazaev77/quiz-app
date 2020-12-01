import React, { useState } from "react";
import { NumMax, StyledAdminPage, TextQuestions } from "./style";
import { TitlePage } from "../styled/Lib";
import TextField from "../TextField";
import AddQuestion from "./AddQuestion";
import { useSelector } from "react-redux";
import AddAnswer from './AddAnswer';

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addQuestions = useSelector(state => state.addTest.items.questions);
  const addAnswers = useSelector(state => state.addTest.items.answers);

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
      <TextQuestions>Вопросы</TextQuestions>
      {addQuestions.map((item) => <AddQuestion key={item.id}/>)}
      {addAnswers.map(item => <AddAnswer key={item.id}/>)}
    </StyledAdminPage>
  );
};

export default AdminPage;
