import React from "react";
import styled from "styled-components";
import landing_video from "../images/reflection.MP4"; // Import your video file


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

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
position: absolute;
bottom: 0px; 
width: 50%;
color: white;
padding: 1em;
font-family: Arial, sans-serif;
font-size: 1em;
font-weight: 400;
line-height: 28.91px;
z-index: 1; 
text-align: right;
margin-right: -15em;
`;

const Landing = ({ credits }) => {
  return (
    <Container>
      <Video autoPlay loop muted playsInline>
        <source src={landing_video} type="video/mp4" />
      </Video>
      <Credits>(Desiree Gonzalez/Daily Bruin)</Credits>
    </Container>
  );
};

export default Landing;