import React from 'react';
import MainButton from '../MainButton';
import PileBox from '../PileBox';
import { StyledResult, ResultText, ResultComment, BtnBox, InTestList } from './style.js';

const Result = () => {
  return (
    <StyledResult>
      <ResultText>
        Результат 4 из 8.
      </ResultText>
      <ResultComment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </ResultComment>
      <BtnBox>
        <MainButton />
      </BtnBox>
      <InTestList>
        Перейти к списку тестов
      </InTestList>
      <PileBox />
    </StyledResult>
  )
}

export default Result;