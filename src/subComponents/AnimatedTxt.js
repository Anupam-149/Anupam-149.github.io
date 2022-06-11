import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: auto;
  margin-top: 40vh;
  font-size: 4rem;
  color: white;
  ${"" /* background-color: yellow; */}
`;

const DynamicTxt = styled.ul`
  list-style: none;
  line-height: 75px;
  height: 75px;
  overflow: hidden;
  ${"" /* background-color:red; */}

  .item {
    position: relative;
    margin-left: 8px;
    ${
      "" /* seconds are just double of typing and here steps are the no of words */
    }
    top:0;
    animation: slide 16s steps(4) infinite;
    animation-delay: 2s;
  }
  @keyframes slide {
    100% {
      top: -300px;
      ${"" /* total up 75*4 */}
    }
  }

  .item::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-left: 2px solid white;
    left: 0;
    ${"" /* here steps are the no of maximum words */}
    animation: typing 4s steps(15) infinite;
    background-color: black;
    animation-delay: 2s;
  }
  @keyframes typing {
    40%,
    60% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;

const Header = styled.div`
  font-size: 4vw;
  font-family: Aldrich;
  color: white;
  margin-top: 12vw;
  @media (max-width: 900px) {
    margin-top: 28vw;
  }
  display: flex;
  justify-content: center;

  ${"" /* span:nth-child(n + 0) */}
  span {
    display: inline-block;
    animation: flip 4s;
    animation-delay: calc(0.2s * var(--i));
  }
  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
  .SpanAnimate {
    font-size: 4vw;
    color: #ffffff;
    animation: slide1 6s;
    margin: 0;
    padding: 0;
  }

  @keyframes slide1 {
    0% {
      margin-left: -800px;
    }

    20% {
      margin-left: -800px;
    }

    35% {
      margin-left: 0px;
    }

    100% {
      margin-left: 0px;
    }
  }
`;

const AnimatedTxt = () => {
  return (
    <div>
      <Header>
        <div style={{ display: "inline-block", marginRight: "20px" }}>Hi!</div>
        <div
          style={{
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          I'm&nbsp;
          <span className="SpanAnimate">
            <span style={{ "--i": "1" }}>A</span>
            <span style={{ "--i": "2" }}>n</span>
            <span style={{ "--i": "3" }}>u</span>
            <span style={{ "--i": "4" }}>p</span>
            <span style={{ "--i": "5" }}>a</span>
            <span style={{ "--i": "6" }}>m</span>
            <span style={{ "--i": "7" }}>&nbsp;</span>
            <span style={{ "--i": "8" }}>G</span>
            <span style={{ "--i": "9" }}>o</span>
            <span style={{ "--i": "10" }}>y</span>
            <span style={{ "--i": "11" }}>a</span>
            <span style={{ "--i": "12" }}>l </span>
          </span>
        </div>
        <br />
      </Header>
      <Wrapper>
        <DynamicTxt>
          <li className="item">
            <span>Web Developer</span>
          </li>
          <li className="item">
            <span>CP Enthusiast</span>
          </li>
          <li className="item">
            <span>Graphic Designer</span>
          </li>
          <li className="item">
            <span>Video Designer</span>
          </li>
        </DynamicTxt>
      </Wrapper>
    </div>
  );
};

export default AnimatedTxt;
