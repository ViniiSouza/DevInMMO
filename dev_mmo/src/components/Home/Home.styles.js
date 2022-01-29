import styled, { keyframes } from "styled-components";

const ChangePosition = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 0;
  }
`;

export const BackgroundContainer = styled.div`
  margin: 10px auto;
  border: 5px solid ${(props) => props.theme.colors.primary};
  width: 90vw;
`;

export const HomeBackground = styled.div`
  height: 100%;
  animation: ${ChangePosition} 300s linear infinite;
  background: url("https://i.imgur.com/6AcIUOe.png");
  background-repeat: repeat;
  display: flex;
`;

export const BackgroundSection = styled.section`
  background-color: ${(props) => props.theme.colors.faded};
  margin: 58vh auto 0 auto;
  height: 12vh;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
      height: 14vh;
      margin-top: 55vh;
      transition: 0.5s;
      background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const BackgroundTitle = styled.h5`
  font-size: 49px;
  color: ${(props) => props.theme.colors.extra1};
  margin: 0 0 10px 0;  
  display:block;
  text-decoration: underline 0.1em ${(props) => props.theme.colors.invisible};
  text-underline-offset: 0.2em;

  &:hover {
      text-decoration-color: ${(props) => props.theme.colors.extra1};
      transition: 0.3s;
  }
`;

export const BackgroundDescription = styled.span`  
  font-size:22px;
  width: 100%;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.extra1};
`;