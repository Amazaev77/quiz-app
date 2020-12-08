import React from "react";
import eye from "../../../icons/eye.png";
import eyeClose from "../../../icons/eyeClose.png";
import { StyledIcon } from "./style";

const Icon = ({ showPass, setShowPass }) => {

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <StyledIcon
      src={showPass ? eye : eyeClose}
      alt="icon"
      onClick={handleShowPassword}
    />
  );
}

export default Icon;
