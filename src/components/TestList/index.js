import React, { useEffect } from 'react';
import Test from '../Test';
import { useDispatch, useSelector } from 'react-redux';
import { loadTests } from '../../redux/features/tests';
import { StyledTestList } from './style';

const TestList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTests());
  },[dispatch]);

  const tests = useSelector(state => state.tests.database);

  return (
    <StyledTestList>
      {tests.map(test => <Test key={test.id} test={test} />)}
    </StyledTestList>
  )
}

export default TestList;