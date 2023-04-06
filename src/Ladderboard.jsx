import React from "react";
import styled from "styled-components";

const LadderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LadderboardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const LadderboardItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
`;

const Ladderboard = ({ highestScore }) => {

  return (
    <LadderboardContainer>
      <LadderboardTitle>Ton prime</LadderboardTitle>
      {highestScore > 0 ? (
        <LadderboardItem>
          1. {highestScore}
        </LadderboardItem>
      ) : (
        <p>Pas de score, pas de chocolat.</p>
      )}
    </LadderboardContainer>
  );
};

export default Ladderboard;