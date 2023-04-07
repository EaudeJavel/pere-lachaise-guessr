import styled from "styled-components";
import Button from "./Button/Button";

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

const Pa = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
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
      <Pa>Devine si la personne est enterrée au Père Lachaise ou non</Pa>
      <Heading2>A quel mode veux-tu jouer?</Heading2>
      <Flex>
        <Button onClick={handleNormalModeClick}>Normal</Button>
        <Button onClick={handleChronoModeClick}>Chrono</Button>
      </Flex>
    </Container>
  );
};

export default GameModeSelection;
