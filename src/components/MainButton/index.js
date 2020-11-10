import React from 'react';
import { StyledMainButton } from './style';

const MainButton = ({LinkTo}) => {
  return (
      <StyledMainButton to={LinkTo}>
        Начать тест
      </StyledMainButton>
  )
}

export default MainButton;