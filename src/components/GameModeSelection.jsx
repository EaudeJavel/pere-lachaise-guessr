import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const Flex = styled.div`
  display:flex;
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
      <Heading>Pere Lachaise Guessr</Heading>
      <Heading2>A quel mode veux-tu jouer?</Heading2>
      <Flex>
        <button onClick={handleNormalModeClick}>Normal</button>
        <button onClick={handleChronoModeClick}>Chrono</button>
      </Flex>
    </Container>
  );
};

export default GameModeSelection;
