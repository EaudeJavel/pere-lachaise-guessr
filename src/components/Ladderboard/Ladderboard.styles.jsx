import styled from "styled-components";

export const LadderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; ;
`;

export const LadderboardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const LadderboardItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
  list-style: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 6px;
  }
`;
