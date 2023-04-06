import styled from "styled-components";
import AnswerButton from "../AnswerButton/AnswerButton";

export const ResultContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ResultText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const AnswerButtonStyled = styled(AnswerButton)`
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
