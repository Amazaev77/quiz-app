import React from "react";
import Test from "./Test";
import { useSelector } from "react-redux";
import { StyledTestList, AddTest } from "./style";
import PileBox from "../PileBox";

const TestList = () => {
  const tests = useSelector((state) => state.tests.items);
  const token = useSelector((state) => state.authorization.token);

  return (
    <StyledTestList>
      {token && (
        <AddTest to="/admin">
          Добавить Тест
          <PileBox />
        </AddTest>
      )}
      {tests.map((test) => (
        <Test key={test.id} test={test} />
      ))}
    </StyledTestList>
  );
};

export default TestList;
