import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { StyledApp, GitHubLink, ButtonBox, LinksBox } from './style';
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch } from "react-redux";
import { loadTests } from "../../redux/features/tests";
import { useRoute } from '../../hooks/useRoutes';
import Button from '../Button';
import github from'../../icons/github-icon.svg'

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
        <LinksBox>
          <ButtonBox>
            <Link to='/auth'>
              <Button>
                Авторизация
              </Button>
            </Link>
          </ButtonBox>
          <GitHubLink href="https://github.com/Amazaev77/test-app">
            <img src={github} alt="github" />
          </GitHubLink>
        </LinksBox>
        {routes}
      </Router>
    </StyledApp>
  );
};

export default App;
