import React from "react";
import Test from "../Test";
import { useSelector } from "react-redux";
import { StyledTestList } from "./style";

const TestList = () => {
  const tests = useSelector((state) => state.tests.items);

  return (
    <StyledTestList>
      {tests.map((test) => (
        <Test key={test.id} test={test}/>
      ))}
    </StyledTestList>
  );
};

export default TestList;