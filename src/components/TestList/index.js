import React from "react";
import Test from "./Test";
import { useSelector } from "react-redux";
import { StyledTestList, AddTestLink } from "./style";
import PileBox from "../PileBox";
import { useAuth } from "../../hooks/useAuth";
import { Link } from 'react-router-dom'
import Button from '../Button'
import { ButtonBox } from '../App/style'

const TestList = () => {
  const tests = useSelector((state) => state.tests.items);
  const isAuth = useAuth();

  return (
    <>
      <ButtonBox>
        <Link to={'/auth'}>
          <Button>
            Авторизация
          </Button>
        </Link>
      </ButtonBox>
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
    </>
  );
};

export default TestList;
