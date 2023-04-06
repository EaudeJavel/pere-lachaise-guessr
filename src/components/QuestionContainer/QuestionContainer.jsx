import React from "react";
import { Container, QuestionText, DescriptionText, AnswerContainer } from "./QuestionContainer.styles";
import AnswerButton from "../AnswerButton/AnswerButton";

const QuestionContainer = ({ personality, handleAnswer }) => {
  return (
    <Container>
      <QuestionText>
        {personality ? personality.name : "Click 'Start' pour commencer"}
      </QuestionText>
      <DescriptionText>{personality.description}</DescriptionText>
      <AnswerContainer>
        <AnswerButton onClick={() => handleAnswer(true)}>Oui</AnswerButton>
        <AnswerButton onClick={() => handleAnswer(false)}>Non</AnswerButton>
      </AnswerContainer>
    </Container>
  );
};

export default QuestionContainer;
