import React from "react";
import { ButtonCustom } from "./Button.styles";

const Button = ({ children, onClick }) => {
  return <ButtonCustom onClick={onClick}>{children}</ButtonCustom>;
};

export default Button;