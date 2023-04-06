import React from "react";
import { ResetButtonStyled } from "./ResetButton.styles";

const ResetButton = ({ onClick }) => {
  return <ResetButtonStyled onClick={onClick}>Reset</ResetButtonStyled>;
};

export default ResetButton;
