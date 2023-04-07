import React, { useState, useEffect } from "react";
import personalities from "../../data/personalities.json";
import Ladderboard from "../Ladderboard/Ladderboard";
import TweetButton from "../TweetButton/TweetButton";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import ResultContainer from "../ResultContainer/ResultContainer";
import ScoreboardButton from "../ScoreBoardButton/ScoreBoardButton";

const Game = ({ mode }) => {
  const [personality, setPersonality] = useState(
    personalities[Math.floor(Math.random() * personalities.length)]
  );
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [showTwitterBtn, setShowTwitterBtn] = useState(false);
  const [scores, setScores] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [highestScore, setHighestScore] = useState(() => {
    const savedHighestScore =
      parseInt(localStorage.getItem("highestScore")) || 0;
    return savedHighestScore;
  });
  const [countdownId, setCountdownId] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAnswer = (answer) => {
    if (mode === "chrono") {
      clearTimeout(countdownId);
    }

    const currentPersonality = personality;
    const isCorrect = answer === currentPersonality.buriedAtPereLachaise;
    setIsCorrect(isCorrect);
    setAttempts((prevAttempts) => prevAttempts + 1);

    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }
    }

    setShowResult(true);
    setShowScoreboard(false);
  };

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * personalities.length);
    const nextPersonality = personalities[randomIndex];
    setPersonality(nextPersonality);
    setShowResult(false);
    setIsCorrect(false);
    setShowScoreboard(false);
    setShowTwitterBtn(false);

    if (mode === "chrono") {
      const countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      setCountdownId(countdown);
    }
  };

  const handleReset = () => {
    const randomIndex = Math.floor(Math.random() * personalities.length);
    const nextPersonality = personalities[randomIndex];
    setPersonality(nextPersonality);
    setScore(0);
    setIsCorrect(false);
    setShowResult(false);
    setShowScoreboard(false);
    setShowTwitterBtn(false);
    setIsGameOver(false);
    if (mode === "chrono") {
      setTimer(60);
    }
  };

  const handleScoreboardClick = () => {
    setShowScoreboard((prevShowScoreboard) => !prevShowScoreboard);
    setShowTwitterBtn((prevShowTwitter) => !prevShowTwitter);
  };

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    const savedHighestScore =
      parseInt(localStorage.getItem("highestScore")) || 0;
    setScores(savedScores);
    setHighestScore(savedHighestScore);
  }, []);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("highestScore", highestScore);
  }, [scores, highestScore]);

  useEffect(() => {
    if (showResult && score > 0) {
      if (!scores.includes(score)) {
        setScores((prevScores) => [...prevScores, score].sort((a, b) => b - a));
      }
      if (score > highestScore) {
        setHighestScore(score);
      }
    }
  }, [showResult, score, scores]);

  useEffect(() => {
    if (showResult && score > 0 && !scores.includes(score)) {
      setScores((prevScores) => [...prevScores, score].sort((a, b) => b - a));
    }
  }, [showResult, score, scores]);

  useEffect(() => {
    let countdown;
    if (mode === "chrono" && timer > 0 && !isGameOver) {
      countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      setCountdownId(countdown);
    } else {
      setIsGameOver(true);
      clearTimeout(countdown);
    }

    return () => {
      clearTimeout(countdown);
    };
  }, [timer, mode, isGameOver]);


  return (
    <>
      {!showResult ? (
        <QuestionContainer
          personality={personality}
          handleAnswer={handleAnswer}
          timer={timer}
          mode={mode}
        />
      ) : (
        <ResultContainer
          isCorrect={isCorrect}
          personality={personality}
          score={score}
          attempts={attempts}
          handleNextQuestion={handleNextQuestion}
          handleReset={handleReset}
          isGameOver={isGameOver && timer === 0}
        />
      )}
      {showScoreboard && (
        <Ladderboard
          highestScore={highestScore}
          handleClose={() => setShowScoreboard(false)}
        />
      )}
      {showResult && (
        <>
          <ScoreboardButton onClick={handleScoreboardClick} />
          {showTwitterBtn && <TweetButton score={score} />}
        </>
      )}
    </>
  );
};

export default Game;