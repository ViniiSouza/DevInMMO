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
  margin: 0 auto;
  border: 5px solid rgb(0, 11, 79);
  width: 90vw;
  height: 70vh;
`;

export const HomeBackground = styled.div`
  height: 100%;
  animation: ${ChangePosition} 300s linear infinite;
  background: url("https://i.imgur.com/6AcIUOe.png");
  background-repeat: repeat;
  display: flex;
`;

export const BackgroundSection = styled.section`
  background-color: rgba(0, 11, 79, 80%);
  margin: 58vh auto 0 auto;
  height: 12vh;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
      height: 14vh;
      margin: 56vh auto 0 auto;
      transition: 0.5s;
      background-color: rgba(0, 11, 79, 100%);
  }
`;

export const BackgroundTitle = styled.h5`
  font-size: 49px;
  color: white;
  margin: 0 0 10px 0;  
  display:block;
  text-decoration: underline 0.1em rgba(255, 255, 255, 0);
  text-underline-offset: 0.2em;

  &:hover {
      text-decoration-color: rgba(255, 255, 255, 1);
      transition: 0.3s;
  }
`;

export const BackgroundDescription = styled.span`  
  font-size:22px;
  width: 100%;
  margin: 0 auto;
  color: white;
`;