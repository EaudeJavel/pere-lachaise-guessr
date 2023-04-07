import React from "react";
import {
  Container,
  QuestionText,
  DescriptionText,
  AnswerContainer,
  Timer
} from "./QuestionContainer.styles";
import AnswerButton from "../AnswerButton/AnswerButton";

const QuestionContainer = ({
  personality,
  handleAnswer,
  timer,
  mode,
}) => {
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
      {mode === "chrono" && (
        <Timer>
          Remaining time: {timer}s
        </Timer>
      )}
    </Container>
  );
};

export default QuestionContainer;
