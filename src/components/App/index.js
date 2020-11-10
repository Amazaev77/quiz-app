import React from 'react';
import { Route } from "react-router-dom";
import TestList from '../TestList';
import TestStart from '../TestStart';
import Question from '../Question';
import { StyledApp } from './style';

const App = () => {
  return (
    <StyledApp>
      <Route path="/" exact component={TestList} />
      <Route path="/:id" exact component={TestStart} />
      <Route path="/:id/questionId" component={Question} />
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