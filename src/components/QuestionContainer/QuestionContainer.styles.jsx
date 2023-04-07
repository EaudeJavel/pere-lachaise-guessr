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
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const AnswerContainer = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Timer = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #ff3c3c;
  background-color: #fff4f4;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    padding: 8px;
    margin-bottom: 10px;
  }
`;
