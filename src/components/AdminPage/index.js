import React from "react";
import { NumMax, StyledAdminPage, TextQuestions } from "./style";
import { TitlePage } from "../styled/Lib";
import TextField from "../TextField";
import Questions from './Questions';
import { useDispatch, useSelector } from "react-redux";
import { onChangeTestTitle, onChangeTestSubtitle } from '../../redux/features/addTest';

const AdminPage = () => {
  const dispatch = useDispatch();

  const test = useSelector(state => state.addTest.items.test);

  const handleTestTitle = (value) => {
    dispatch(onChangeTestTitle(value));
  }

  const handleTestSubtitle = (value) => {
    dispatch(onChangeTestSubtitle(value));
  } 

  return (
    <StyledAdminPage>
      <TitlePage>Добавление нового теста</TitlePage>
      <TextField
        value={test.title}
        onChange={handleTestTitle}
        placeHolder="Введите заголовок"
      />
      <NumMax test={test}>
        Максимум 100 символов (осталось {100 - test.title.length})
      </NumMax>
      <TextField
        textarea={true}
        value={test.subtitle}
        onChange={handleTestSubtitle}
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
