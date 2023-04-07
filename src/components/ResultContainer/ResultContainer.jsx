import React, { useState } from "react";
import {
  ResultContainerStyled,
  ResultText,
  ButtonsContainer,
  AnswerButtonStyled,
} from "./ResultContainer.styles";
import ResetButton from "../ResetButton/ResetButton";

const ResultContainer = ({ isCorrect, personality, score, attempts, handleNextQuestion, handleReset }) => {

  return (
    <ResultContainerStyled>
      <ResultText>
        {isCorrect
          ? "Bien vu"
          : `Eh bien ${personality.buriedAtPereLachaise ? "si" : "non"}`}
      </ResultText>
      <ResultText>
        {score} / {attempts}
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