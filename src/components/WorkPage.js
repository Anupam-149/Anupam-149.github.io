import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Cards/Card";
import BigTitlte from "../subComponents/BigTitle";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  ${"" /* scrolling height */}
  @media (max-width: 767px) {
    height: 400vh;
  }
  height: 160vh;
  overflow-x: auto;

  position: relative;
  display: flex;
  ${"" /* align-items: center; */}
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ClickMe1 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const clickMe = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (clickMe.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={clickMe}>
          <ClickMe1
            src={require("../assets/Images/ClickMe1.png")}
            alt="ClickMe"
          />
        </Rotate>

        <BigTitlte text="PROJECTS" top="75%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
