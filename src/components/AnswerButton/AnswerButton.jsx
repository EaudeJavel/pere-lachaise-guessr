import React from "react";
import { Button } from "./AnswerButton.styles";

const AnswerButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default AnswerButton;