import React from "react";
import {
  LadderboardContainer,
  LadderboardTitle,
  LadderboardItem,
} from "./Ladderboard.styles";

const Ladderboard = ({ highestScore }) => {
  return (
    <LadderboardContainer>
      <LadderboardTitle>Ton prime</LadderboardTitle>
      {highestScore > 0 ? (
        <LadderboardItem>{highestScore}</LadderboardItem>
      ) : (
        <p>Pas de score, pas de chocolat.</p>
      )}
    </LadderboardContainer>
  );
};

export default Ladderboard;
