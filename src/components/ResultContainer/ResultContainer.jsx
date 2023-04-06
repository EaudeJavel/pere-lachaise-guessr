import React from "react";
import {
  ResultContainerStyled,
  ResultText,
  ButtonsContainer,
  AnswerButtonStyled,
} from "./ResultContainer.styles";
import ResetButton from "../ResetButton/ResetButton";

const ResultContainer = ({ isCorrect, personality, score, personalitiesLength, handleNextQuestion, handleReset }) => {
  return (
    <ResultContainerStyled>
      <ResultText>
        {isCorrect
          ? "Bien vu"
          : `Eh bien ${personality.buriedAtPereLachaise ? "oui" : "non"}`}
      </ResultText>
      <ResultText>
        {score} / {personalitiesLength}
      </ResultText>
      <ButtonsContainer>
        <AnswerButtonStyled onClick={handleNextQuestion}>
          Prochaine question
        </AnswerButtonStyled>
        <ResetButton onClick={handleReset} />
      </ButtonsContainer>
    </ResultContainerStyled>
  );
};

export default ResultContainer;