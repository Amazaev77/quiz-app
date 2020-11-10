import React, { useEffect } from 'react';
import Test from '../Test';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTestList } from './style';
import { loadTests } from '../../redux/features/tests';
import { loadQuestions } from '../../redux/features/questions';

const TestList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
    dispatch(loadQuestions());
  },[dispatch]);

  const tests = useSelector(state => state.tests.database);

  return (
    <StyledTestList>
      {tests.map(test => <Test key={test.id} test={test} />)}
    </StyledTestList>
  )
}

export default TestList;