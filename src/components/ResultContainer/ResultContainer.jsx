import React from "react";
import {
  ResultContainerStyled,
  ResultText,
  ButtonsContainer,
  AnswerButtonStyled,
} from "./ResultContainer.styles";
import ResetButton from "../ResetButton/ResetButton";

const ResultContainer = ({
  isCorrect,
  personality,
  score,
  attempts,
  handleNextQuestion,
  handleReset,
  mode,
  timer,
  isGameFinished,
}) => {
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
      {mode === "chrono" && <div>Time remaining: {timer} seconds</div>}
      {isGameFinished ? (
        <>
          <ResultText>Game Over!</ResultText>
          <ResetButton onClick={handleReset}>Restart Game</ResetButton>
        </>
      ) : (
        <ButtonsContainer>
          <AnswerButtonStyled onClick={() => handleNextQuestion(true)}>
            Prochaine question
          </AnswerButtonStyled>
          <ResetButton onClick={handleReset} />
        </ButtonsContainer>
      )}
    </ResultContainerStyled>
  );
};

export default ResultContainer;
