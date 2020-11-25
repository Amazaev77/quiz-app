import React from 'react';
import { StyledPlaceHolder } from './style';

function PlaceHolder({ placeHolder, focus, textAlign}) {
  return (
    <StyledPlaceHolder
      focus={focus}
      textAlign={textAlign}
    >
      {placeHolder}
    </StyledPlaceHolder>
  )
}

export default PlaceHolder;