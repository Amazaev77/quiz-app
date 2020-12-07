import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TestList from "../TestList";
import TestStart from "../TestStart";
import Question from "../Question";
import Result from "../Result";
import { StyledApp } from "./style";
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch, useSelector } from "react-redux";
import { loadTests } from "../../redux/features/tests";
import Authorization from "../Authorization";
import AdminPage from "../AdminPage";

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authorization.token);

  useEffect(() => {
    dispatch(loadTests());
    /*
    *  Сразу загружаю вопросы, так как используется фейковый сервер
    *  и нужно узнать количество вопросов
    * */
    dispatch(loadQuestions());
  }, [dispatch]);

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

  return (
    <StyledApp>
      <Router>{routes}</Router>
    </StyledApp>
  );
};

export default App;
