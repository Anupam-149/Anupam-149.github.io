import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Cards/Card";

const Box = styled.div`
  height: 350vh;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  display: flex;
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
    <Box>
      <Main ref={ref}>
        {Work.map((d) => (
          <Card key={d.id} data={d} />
        ))}
      </Main>
    </Box>
  );
};

export default WorkPage;
