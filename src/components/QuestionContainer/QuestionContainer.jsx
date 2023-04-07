import React from "react";
import {
  Container,
  QuestionText,
  DescriptionText,
  AnswerContainer,
  Timer
} from "./QuestionContainer.styles";
import Button from "../Button/Button";

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
        <Button onClick={() => handleAnswer(true)}>Oui</Button>
        <Button onClick={() => handleAnswer(false)}>Non</Button>
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
