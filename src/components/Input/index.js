import React, { useState } from 'react'
import { StyledInput, StyledWrapperInput } from './style';
import PlaceHolder from '../PlaceHolder';

const Input = ({type = "text", textAlign, placeHolder}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  return (
    <StyledWrapperInput
      textAlign={textAlign}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <PlaceHolder
        placeHolder={placeHolder}
        focus={focus}
        textAlign={textAlign}
      />
      <StyledInput
        type={type}
        textAlign={textAlign}
      />
    </StyledWrapperInput>
  );
}

export default Input;