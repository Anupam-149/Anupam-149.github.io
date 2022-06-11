import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//particle config files
import config from "../config/particles.json";

const particlesInit = async (main) => {
  //   console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

const particlesLoaded = (container) => {
  //   console.log(container);
};

const MainParticleComponent = () => {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ position: "absolute", top: 0 }}
      options={config}
    />
  );
};

export default MainParticleComponent;
