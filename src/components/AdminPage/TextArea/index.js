import React, { useState } from 'react';
import { StyledTextArea, WrapperTextArea } from './style'
import PlaceHolder from '../../Input/PlaceHolder';
import { StyledWrapperInput } from '../../Input/style'

const TextArea = ({placeholder, onChange}) => {
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

  return (
    <WrapperTextArea>
      <PlaceHolder
        placeHolder={placeholder}
        focus={focus}
        value={"value"}
      />
      <StyledTextArea
        onChange={handleChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </WrapperTextArea>
  )
}

export default TextArea;