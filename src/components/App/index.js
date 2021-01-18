import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { StyledApp, GitHubLink, ButtonBox } from './style'
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch } from "react-redux";
import { loadTests } from "../../redux/features/tests";
import { useRoute } from '../../hooks/useRoutes';
import Button from '../Button'

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
      <Router>
        <GitHubLink href="https://github.com/Amazaev77/test-app">
          <img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/07/github-eyecatch-200x105.png" alt="github"/>
        </GitHubLink>
        <ButtonBox>
          <Link to={'/auth'}>
            <Button>
              Авторизация
            </Button>
          </Link>
        </ButtonBox>
        {routes}
      </Router>
    </StyledApp>
  );
};

export default App;
