import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

import Travel from "../assets/Images/Travel.jpeg";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 35vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  font-weight: bolder;
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 1.4rem;
  }
`;
const Description1 = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  .TravelImg {
    width: 60%;
    height: 60%;
    margin: auto;
  }
`;
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <i className="fa-solid fa-palette fa-xl"></i>Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Graphic Designing</li>
              <li>Video Designing</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Affinity Photo, Affinity Designer, and DaVinci Resolve</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <i className="fa-solid fa-guitar fa-xl"></i>Non-Technical
          </Title>
          <Description1>
            <img src={Travel} alt="Travel" className="TravelImg" />
            <br />I love listening music, cycling, travelling, watching (series,
            movies), playing (Badminton, BGMI) and exploring new things.
          </Description1>
        </Main>

        <BigTitle text="HOBBIES" top="80%" right="30%" />

        <SocialIcons theme="light" />
        <LogoComponent theme="light" />
        <PowerButton />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
