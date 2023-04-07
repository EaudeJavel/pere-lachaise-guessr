import React from "react";
import styled from "styled-components";

const TwitterButton = styled.a`
  background-color: #1da1f2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 50px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const TweetButton = ({ score, attempts }) => {
  const tweetText = `My score on Père Lachaise Guessr is ${score} out of ${attempts} Can you beat me? #PereLachaiseGuessr`;

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  const handleMouseOver = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    if (x <= 170) {
      e.target.style.transform = "translateX(170px)";
    } else if (x > 170) {
      e.target.style.transform = "translateX(-170px)";
    } else {
      e.target.style.transform = "";
    }
  };

  return (
    <TwitterButton
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="enter"
      onMouseOver={handleMouseOver}
    >
      Tweet Your Score
    </TwitterButton>
  );
};

export default TweetButton;
