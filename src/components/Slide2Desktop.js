import React from "react";
import styled from "styled-components";

import BackgroundTextSVG from "../images/slide2bg.svg"; // Yellow text SVG
import SlimeLeftBox from "../images/slide2box1slime.svg"; // Left box slime (acts as a container)
import SlimeRightBox from "../images/slide2box2.svg"; // Right box slime (acts as a container)

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #FFE5B0; /* Yellow background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
`;

/* Overlay the yellow text SVG */
const BackgroundText = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
`;

const ContentContainer = styled.div`
  top: 8%;
  width: 85%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  z-index: 2;
`;

/* Left Box (Article Image) */
const LeftBoxContainer = styled.div`
  position: relative;
  width: 45%;
  height: 85%;
  background-image: url(${SlimeLeftBox}); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem; /* Adjust padding to keep content inside */
`;

/* Image inside the slime outline */
const ArticleImage = styled.img`
  width: 80%; /* Ensure image fits inside */
  height: 80%;
  object-fit: cover;
`;

/* Image Credit */
const ImageCredit = styled.div`
  position: absolute;
  bottom: 5px;
  font-family: "Baskervville", serif;
  font-size: 0.8rem;
  color: #4E3A24;
`;

/* Right Box (Article Text) */
const RightBoxContainer = styled.div`
  position: relative;
  width: 47%;
  height: 85%;
  background-image: url(${SlimeRightBox}); /* Slime acts as container */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

/* Title */
const Title = styled.div`
  font-family: "Passion One", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #4E3A24;
  margin-top:2rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

/* Scrollable Article Text */
const ArticleText = styled.div`
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  height: 60%;
  width: 80%;
  overflow-y: auto;
  padding-right: 1rem;
  margin: auto;
  text-align: justify;
`;

const Slide2Desktop = ({ props }) => {
  return (
    <Background>
      {/* Yellow Text Background */}
      <BackgroundText src={BackgroundTextSVG} alt="Background Text" />

      {/* Content */}
      <ContentContainer>
        {/* Left Box (Image inside slime container) */}
        <LeftBoxContainer>
          <ArticleImage src={props.article_img} alt="Article Image" />
          <ImageCredit>({props.illustration_byline})</ImageCredit>
        </LeftBoxContainer>

        {/* Right Box (Text inside slime container) */}
        <RightBoxContainer>
          <Title>{props.article_title}</Title>
          <ArticleText>{props.article_text}</ArticleText>
        </RightBoxContainer>
      </ContentContainer>
    </Background>
  );
};

export default Slide2Desktop;
