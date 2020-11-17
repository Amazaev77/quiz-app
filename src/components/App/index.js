import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import TestList from '../TestList';
import TestStart from '../TestStart';
import Question from '../Question';
import { StyledApp } from './style';
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch } from 'react-redux';
import { loadTests } from '../../redux/features/tests';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <StyledApp>
      <Switch>
        <Route path="/:id/:questionId" component={Question} />
        <Route path="/:id" component={TestStart} />
        <Route path="/" exact component={TestList} />
        <Route>
          404
        </Route>
      </Switch>
    </StyledApp>
  )
}

/**
 * / - main
 * /:id - test start
 * /:id/:questionId - questions
 *
 * /admin
 * /login
 */

export default App