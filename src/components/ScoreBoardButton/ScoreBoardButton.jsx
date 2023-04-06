import React from "react";
import { ScoreboardButtonStyled } from "./ScoreboardButton.styles";

const ScoreboardButton = ({ onClick }) => {
  return (
    <ScoreboardButtonStyled onClick={onClick}>
      Voir tableau de scores
    </ScoreboardButtonStyled>
  );
};

export default ScoreboardButton;