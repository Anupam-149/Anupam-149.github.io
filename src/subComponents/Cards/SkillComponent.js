import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 23rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: #bfbdbb;
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  overflow: hidden;
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  font-size: 1rem;

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const imgStyle = {
  width: "100%",
  height: "100%",
};

const SkillComponent = (props) => {
  const { name, tags, imgSrc } = props.Skill;
  return (
    <Container variants={Item}>
      <Box>
        <Image>
          <img src={imgSrc} alt="Languages" style={imgStyle} />
        </Image>

        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
      </Box>
    </Container>
  );
};

export default SkillComponent;
