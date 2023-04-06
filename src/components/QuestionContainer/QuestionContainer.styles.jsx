import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionText = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.p`
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
`;

export const AnswerContainer = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;