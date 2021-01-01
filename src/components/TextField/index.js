import React, { useState } from "react";
import { StyledInput, StyledTextarea, StyledWrapperTextField } from "./style";
import PlaceHolder from "./PlaceHolder";
import PropTypes from "prop-types";

const TextField = ({
  placeHolder,
  value,
  onChange,
  type,
  textAlign,
  textarea,
  miniSize,
  answerRight,
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const handleChangeTextField = (e) => {
    onChange(e.target.value);
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
          answerRight={answerRight}
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

TextField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  textAlign: PropTypes.string,
  textarea: PropTypes.bool,
  miniSize: PropTypes.bool,
  showPass: PropTypes.bool,
  setShowPas: PropTypes.func,
  answerRight: PropTypes.bool
};

export default TextField;
