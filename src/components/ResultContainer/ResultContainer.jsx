import React from "react";
import {
  ResultContainerStyled,
  ResultText,
  ButtonsContainer,
  ButtonStyled,
} from "./ResultContainer.styles";
import {
  DescriptionText,
} from "../QuestionContainer/QuestionContainer.styles";
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
      {!isCorrect &&
        <DescriptionText>
          {personality.explanation}
        </DescriptionText>
      }
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
          <ButtonStyled onClick={() => handleNextQuestion(true)}>
            Prochaine question
          </ButtonStyled>
          <ResetButton onClick={handleReset} />
        </ButtonsContainer>
      )}
    </ResultContainerStyled>
  );
};

export default ResultContainer;
