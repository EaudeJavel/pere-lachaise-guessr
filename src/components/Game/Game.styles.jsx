import styled from "styled-components";

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const GameOverHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem; ;
`;

export const Flex = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ScoreDisplay = styled.p`
  font-size: 24px;
  color: #ffffff;
  margin: 16px 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 8px 0;
  }
`;
