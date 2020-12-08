import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminPage from '../components/AdminPage';
import Result from '../components/Result';
import Question from '../components/Question';
import TestStart from '../components/TestStart';
import TestList from '../components/TestList';
import Authorization from '../components/Authorization';
import React, { useEffect } from 'react'
import { loadTests } from '../redux/features/tests'
import { loadQuestions } from '../redux/features/questions'

export const useRoute = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadTests());
    /*
     *  Сразу загружаю вопросы, так как используется фейковый сервер
     *  и нужно узнать количество вопросов
     * */
    dispatch(loadQuestions());
  }, [dispatch]);
  const token = useSelector((state) => state.authorization.token);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/:id/result" component={Result} />
        <Route path="/:id/:questionId" component={Question} />
        <Route path="/:id" component={TestStart} />
        <Route path="/" exact component={TestList} />
        <Redirect to="/" />
        <Route>404</Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" component={Authorization} />
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return routes;
}