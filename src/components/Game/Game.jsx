import React, { useState, useEffect } from "react";
import personalities from "../../data/personalities.json";
import Ladderboard from "../Ladderboard/Ladderboard";
import TweetButton from "../TweetButton/TweetButton";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import ResultContainer from "../ResultContainer/ResultContainer";
import ScoreboardButton from "../ScoreBoardButton/ScoreBoardButton";


const Game = () => {
    const [personality, setPersonality] = useState(
      personalities[Math.floor(Math.random() * personalities.length)]
    );
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showScoreboard, setShowScoreboard] = useState(false);
    const [showTwitterBtn, setShowTwitterBtn] = useState(false);
    const [scores, setScores] = useState([]);
    const [highestScore, setHighestScore] = useState(() => {
      const savedHighestScore =
        parseInt(localStorage.getItem("highestScore")) || 0;
      return savedHighestScore;
    });

    useEffect(() => {
      const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
      const savedHighestScore = parseInt(localStorage.getItem("highestScore")) || 0;
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

    const handleAnswer = (answer) => {
      const currentPersonality = personality;
      const isCorrect = answer === currentPersonality.buriedAtPereLachaise;
      setIsCorrect(isCorrect);

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
    };

    const handleScoreboardClick = () => {
      setShowScoreboard((prevShowScoreboard) => !prevShowScoreboard);
      setShowTwitterBtn((prevShowTwitter) => !prevShowTwitter);
    };

    useEffect(() => {
      if (showResult && score > 0 && !scores.includes(score)) {
        setScores((prevScores) => [...prevScores, score].sort((a, b) => b - a));
      }
    }, [showResult, score, scores]);

    return (
      <>
        {!showResult ? (
          <QuestionContainer
            personality={personality}
            handleAnswer={handleAnswer}
          />
        ) : (
          <ResultContainer
            isCorrect={isCorrect}
            personality={personality}
            score={score}
            personalitiesLength={personalities.length}
            handleNextQuestion={handleNextQuestion}
            handleReset={handleReset}
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