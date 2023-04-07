import styled from "styled-components";

export const ButtonCustom = styled.button`
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => (props.isCorrect ? "#4CAF50" : "#FF5722")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-out, height 0.3s ease-out;
  }

  &:hover:before {
    width: 100px;
    height: 100px;
  }

  &:active {
    transform: translateY(2px);
  }

  &:active:before {
    width: 50px;
    height: 50px;
    transition: width 0.1s ease-out, height 0.1s ease-out;
  }
`;