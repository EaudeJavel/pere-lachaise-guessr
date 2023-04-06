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

const LadderboardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LadderboardItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
`;

const Ladderboard = ({ scores }) => {

  return (
    <LadderboardContainer>
      <LadderboardTitle>Top Scores</LadderboardTitle>
      {scores.length > 0 ? (
        <LadderboardList>
          {scores.map((score, index) => (
            <LadderboardItem key={index}>
              {index + 1}. {score}
            </LadderboardItem>
          ))}
        </LadderboardList>
      ) : (
        <p>No scores yet.</p>
      )}
    </LadderboardContainer>
  );
};

export default Ladderboard;