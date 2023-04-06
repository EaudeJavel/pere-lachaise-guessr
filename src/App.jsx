import React, { useState } from "react";
import { AppContainer, Heading } from "./App.styles";
import Game from "./components/Game/Game";
import GameModeSelection from "./components/GameModeSelection";

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
        <Heading>Pere Lachaise Guessr</Heading>
        {gameMode ? (
          <Game mode={gameMode} />
        ) : (
          <GameModeSelection handleGameModeSelection={handleGameModeSelection} />
        )}
      </AppContainer>
    </>
  )
};

export default App;