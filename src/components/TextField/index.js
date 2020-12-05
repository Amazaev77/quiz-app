import React, { useState } from "react";
import { StyledInput, StyledTextarea, StyledWrapperTextField } from "./style";
import PlaceHolder from "./PlaceHolder";

const TextField = ({
  type,
  textAlign,
  placeHolder,
  onChange,
  value,
  textarea,
  miniSize
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const handleChangeTextField = (e) => {
    return onChange(e.target.value);
  };

  return (
    <StyledWrapperTextField
      textAlign={textAlign}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <PlaceHolder
        placeHolder={placeHolder}
        focus={focus}
        value={value}
        textAlign={textAlign}
        miniSize={miniSize}
      />
      {textarea ? (
        <StyledTextarea
          textarea={textarea}
          onChange={handleChangeTextField}
          value={value}
          miniSize={miniSize}
        />
      ) : (
        <StyledInput
          textarea={textarea}
          onChange={handleChangeTextField}
          value={value}
          inpType={type}
          textAlign={textAlign}
          miniSize={miniSize}
        />
      )}
    </StyledWrapperTextField>
  );
};

export default TextField;
