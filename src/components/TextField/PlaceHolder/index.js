import React from "react";
import { StyledPlaceHolder } from "./style";

function PlaceHolder({ placeHolder, focus, textAlign, value, miniSize }) {
  return (
    <StyledPlaceHolder
      focus={focus}
      value={value}
      extAlign={textAlign}
      miniSize={miniSize}
    >
      {placeHolder}
    </StyledPlaceHolder>
  );
}

export default PlaceHolder;
