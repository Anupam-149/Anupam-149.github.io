import React from "react";
import styled from "styled-components";
import LogoBlackFont from "../assets/Images/LogoBlackFont.png"
import LogoWhiteFont from "../assets/Images/LogoWhiteFont.png"

const Logo = styled.h1`
  display: inline-block;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const MyLogo = styled.img`
  alt:"Mylogo";
  width:10%;
  height:10%;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>
  <MyLogo src={(props.theme==="dark")?LogoWhiteFont:LogoBlackFont} alt="Mylogo"/>
  </Logo>;
};

export default LogoComponent;
