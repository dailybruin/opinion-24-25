import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import Letter from "./Letter";


const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
`;

const LandingLetter = () => {
  return (
    <Container>
      Home
    </Container>
  );
};

export default LandingLetter;