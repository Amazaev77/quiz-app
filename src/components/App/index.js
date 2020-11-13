import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import TestList from '../TestList';
import TestStart from '../TestStart';
import Question from '../Question';
import { StyledApp } from './style';
import { loadQuestions } from "../../redux/features/questions";
import { useDispatch } from 'react-redux';
import { loadTests } from '../../redux/features/tests';
import Result from '../Result'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <StyledApp>
      <Route path="/" exact component={TestList} />
      <Route path="/:id" exact component={TestStart} />
      <Route path="/:id/:questionId" component={Question} />
      <Route path="/result" component={Result} />
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