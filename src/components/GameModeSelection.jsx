import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const GameModeSelection = ({ handleGameModeSelection }) => {
    const handleNormalModeClick = () => {
      handleGameModeSelection("normal");
    };

    const handleChronoModeClick = () => {
      handleGameModeSelection("chrono");
    };

    return (
      <Container>
        <Heading>A quel mode veux-tu jouer?</Heading>
        <button onClick={handleNormalModeClick}>Normal</button>
        <button onClick={handleChronoModeClick}>Chrono</button>
      </Container>
    );
  };

export default GameModeSelection