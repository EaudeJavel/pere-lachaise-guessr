import React, { useState } from "react";
import styled from "styled-components";
import Game from "./components/Game/Game";
import GameModeSelection from "./components/GameModeSelection";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Press Start 2P", sans-serif;
`;

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "f") {
      toggleFullScreen();
    }
  };

  const handleGameModeSelection = (mode) => {
    setGameMode(mode);
  };

  return (
    <>
      <AppContainer onKeyDown={handleKeyDown} tabIndex={0}>
        {gameMode ? (
          <Game mode={gameMode} />
        ) : (
          <GameModeSelection
            handleGameModeSelection={handleGameModeSelection}
          />
        )}
      </AppContainer>
    </>
  );
};

export default App;
