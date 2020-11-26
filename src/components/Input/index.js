import React, { useEffect, useState } from 'react'
import { StyledInput, StyledWrapperInput } from './style';
import PlaceHolder from './PlaceHolder';

const Input = ({type, textAlign, placeHolder, onChange, value}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }

  const handleChangeInput = (e) => {
    return onChange(e.target.value);
  }

  useEffect(() => {
    const i = document.getElementById('inp');

    i.focus();
  }, []);

  return (
    <StyledWrapperInput
      textAlign={textAlign}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <PlaceHolder
        placeHolder={placeHolder}
        focus={focus}
        value={value}
        textAlign={textAlign}
      />
      <StyledInput
        id="inp"
        onChange={handleChangeInput}
        value={value}
        type={type}
        textAlign={textAlign}
      />
    </StyledWrapperInput>
  );
}

export default Input;