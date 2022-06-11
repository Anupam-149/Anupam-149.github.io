import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";

import ParticleComponent from "../subComponents/ParticleComponent";
import LogoComponent from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

const override = css`
  display: flex;
  margin: auto;
  padding: auto;
`;

export default function Loading(props) {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <LogoComponent theme="dark" />
      <SocialIcons theme="dark" />
      <PowerButton />
      <ParticleComponent theme="dark" />
      <ClimbingBoxLoader
        color="white"
        loading={props.loading}
        size={80}
        css={override}
      />
    </div>
  );
}
