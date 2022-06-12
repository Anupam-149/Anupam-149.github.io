import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import Me1 from "../assets/Images/ClickMe.png";
import Me2 from "../assets/Images/ClickMe1.png";
import AnimatedTxt from "../subComponents/AnimatedTxt";

// import Hacker from "../assets/Images/Hacker.gif"
import MainParticleComponent from "../subComponents/MainParticleComponent";

const MainContainer = styled.div`
  background: ${(props) => (props.click ? "white" : "black")};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${"" /* background-image: {click}?null:url(${Hacker}); */}
  ${"" /* background-image: require("../assets/Images/profile-img.png"); */}
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  z-index: 2;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const ClickMe = styled.img`
  ${
    "" /* width: ${(props) => (props.click ? "2000px" : "50%")};
  height: ${(props) => (props.click ? "2000px" : "50%")}; */
  }
  width:100%;
  height: 100%;
  border-radius: 100%;
`;

const Contact = styled.a`
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const INTERESTS = styled(NavLink)`
  ${"" /* color: ${(props) => props.theme.text}; */}
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  position: absolute;
  top: 52%;
  right: calc(1rem);
  transform: rotate(90deg) translate(-40%, -40%);
  text-decoration: none;
  z-index: 1;
`;
const SKILL = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  text-decoration: none;
  z-index: 1;
`;

export default function Main(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // console.log(click);

  return (
    // style={{ backgroundImage: url({Hacker})}}
    <MainContainer click={+click}>
      {click ? null : <AnimatedTxt />}
      <DarkDiv click={+click} />
      {click ? null : <MainParticleComponent />}
      <Container>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme={"dark"} />
        <Center click={+click}>
          <ClickMe
            onClick={() => handleClick()}
            // src={require("../assets/Images/ClickMe.png")}
            src={click ? Me1 : Me2}
            alt="ClickMe"
          />
          <span onClick={() => handleClick()}>
            <i
              className="fa-solid fa-hand-point-up fa-2xl"
              style={{ color: "white" }}
            ></i>
          </span>
        </Center>
      </Container>

      {click ? <Intro click={+click} /> : null}

      <Contact href="mailto:goyalanupam149@gmail.com" click={+click} target="_blank">
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.setLoading(true)}
        >
          Mail Me..
        </motion.h2>
      </Contact>

      <INTERESTS to="/hobbies" click={+click}>
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.setLoading(true)}
        >
          Hobbies
        </motion.h2>
      </INTERESTS>
      <SKILL to="/skill">
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.setLoading(true)}
        >
          Skills
        </motion.h2>
      </SKILL>
      <BottomBar>
        <ABOUT to="/about">
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => props.setLoading(true)}
          >
            About
          </motion.h2>
        </ABOUT>
        <WORK to="/work" click={+click}>
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => props.setLoading(true)}
          >
            Projects
          </motion.h2>
        </WORK>
      </BottomBar>
    </MainContainer>
  );
}
