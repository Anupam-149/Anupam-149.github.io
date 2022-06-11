import React from "react";
import styled from "styled-components";
import Hacker from "../assets/Images/Hacker.gif";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";


const MainLoad = styled.div`
  height: 100vh;
  background: url(${Hacker});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
`;

export default function Loading(props) {
  return (
    <MainLoad>
      <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme={"dark"} />
    </MainLoad>
  );
}
