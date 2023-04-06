import React, { useState } from "react";
import styled from "styled-components";
import personalities from "./personalities.json";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const QuestionText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-top: 20px;
`;

const AnswerButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => (props.isCorrect ? "#4CAF50" : "#FF5722")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ResultText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const DescriptionText = styled.p`
  width: 40%;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const ResetButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const App = () => {
  const [personality, setPersonality] = useState(
    personalities[Math.floor(Math.random() * personalities.length)]
  );
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (answer) => {
    const currentPersonality = personality;
    const isCorrect = answer === currentPersonality.buriedAtPereLachaise;
    setIsCorrect(isCorrect);
    setScore(score + isCorrect);
    setShowResult(true);
    setHasAnswered(true);
  };

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * personalities.length);
    const nextPersonality = personalities[randomIndex];
    setPersonality(nextPersonality);
    setShowResult(false);
    setIsCorrect(false);
    setHasAnswered(false);
  };

  const handleReset = () => {
    const randomIndex = Math.floor(Math.random() * personalities.length);
    const nextPersonality = personalities[randomIndex];
    setPersonality(nextPersonality);
    setScore(0);
    setIsCorrect(false);
    setShowResult(false);
    setHasAnswered(false);
  };

  return (
    <AppContainer>
      {!showResult ? (
        <QuestionContainer>
          <QuestionText>
            {personality ? personality.name : "Click 'Start' to start"}
          </QuestionText>
          <DescriptionText>{personality.description}</DescriptionText>
          <AnswerContainer>
            <AnswerButton onClick={() => handleAnswer(true)}>Yes</AnswerButton>
            <AnswerButton onClick={() => handleAnswer(false)}>No</AnswerButton>
          </AnswerContainer>
        </QuestionContainer>
      ) : (
        <QuestionContainer>
          <ResultText>{isCorrect ? "Correct!" : "Incorrect!"}</ResultText>
          {!isCorrect && (
            <ResultText>
              The correct answer was{" "}
              {personality.buriedAtPereLachaise ? "oui" : "non"}
            </ResultText>
          )}
          <AnswerContainer>
            <AnswerButton onClick={handleNextQuestion}>
              {score === personalities.length - 1
                ? "Voir score"
                : "Prochaine question"}
            </AnswerButton>
          </AnswerContainer>
        </QuestionContainer>
      )}
      {showResult && (
        <ResultText>
          Your Score: {score} / {personalities.length}
        </ResultText>
      )}
      {showResult && <ResetButton onClick={handleReset}>Reset</ResetButton>}
    </AppContainer>
  );
};

export default App;
