import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToggleShowPassword } from "../../../redux/features/authorization";
import eye from "../../../icons/eye.png";
import eyeClose from "../../../icons/eyeClose.png";
import { StyledIcon } from "./style";

function Icon() {
  const dispatch = useDispatch();

  const showPass = useSelector((state) => state.authorization.showPass);

  const handleShowPassword = () => {
    dispatch(onToggleShowPassword());
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
