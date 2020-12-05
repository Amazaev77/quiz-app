import React from "react";
import { StyledPlaceHolder } from "./style";

const PlaceHolder = ({ placeHolder, focus, textAlign, value, miniSize }) => {
  return (
    <StyledPlaceHolder
      focus={focus}
      value={value}
      textAlign={textAlign}
      miniSize={miniSize}
    >
      {placeHolder}
    </StyledPlaceHolder>
  );
};

export default PlaceHolder;
