import React from "react";
import Test from "./Test";
import { useSelector } from "react-redux";
import { StyledTestList, AddTestLink } from "./style";
import PileBox from "../PileBox";
import { useAuth } from "../../hooks/useAuth";

const TestList = () => {
  const tests = useSelector((state) => state.tests.items);
  const isAuth = useAuth();

  return (
    <StyledTestList>
      {isAuth && (
        <AddTestLink to="/admin">
          Добавить Тест
          <PileBox />
        </AddTestLink>
      )}
      {tests.map((test) => (
        <Test key={test.id} test={test} />
      ))}
    </StyledTestList>

  );
};

export default TestList;
