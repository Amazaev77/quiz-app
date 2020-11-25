import React from 'react';
import { StyledPlaceHolder } from './style';

function PlaceHolder({ placeHolder, focus, textAlign, value}) {
  return (
    <StyledPlaceHolder
      focus={focus}
      value={value}
      textAlign={textAlign}
    >
      {placeHolder}
    </StyledPlaceHolder>
  )
}

export default PlaceHolder;