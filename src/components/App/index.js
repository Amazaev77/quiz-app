import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledApp } from "./style";
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch } from "react-redux";
import { loadTests } from "../../redux/features/tests";
import { useRoute } from '../../hooks/useRoutes'

const App = () => {
  const dispatch = useDispatch();

  const routes = useRoute();
  
  useEffect(() => {
    dispatch(loadTests());
    /*
     *  Сразу загружаю вопросы, так как используется фейковый сервер
     *  и нужно узнать количество вопросов
     * */
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <StyledApp>
      <Router>{routes}</Router>
    </StyledApp>
  );
};

export default App;
