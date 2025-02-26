import React from "react";
import styled from "styled-components";

import BackgroundTextSVG from "../images/slide2bg.svg"; // Yellow text SVG
import SlimeLeftBox from "../images/slide2box1slime.svg"; // Left box slime
import SlimeRightBox from "../images/slide2box2.svg"; // Right box slime

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

const NavBar = styled.div`
  width: 100%;
  height: 3rem;
  background: #4E3A24; /* Dark brown nav */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  z-index: 3;
`;

const NavItem = styled.div`
  cursor: pointer;
`;


const ContentContainer = styled.div`
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

const LeftBoxContainer = styled.div`
  position: relative;
  width: 45%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Left Box */
const LeftBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3; /* Ensure box stays above the slime */
`;

/* Image Fits Inside the Slime Square */
const ArticleImageWrapper = styled.div`
  position: absolute;
  width: 100%; /* Ensure it stays within the square outline */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevents image from spilling out */
`;

const ArticleImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Ensures it scales inside the square */
  display: block;
`;

/* Image Credit */
const ImageCredit = styled.div`
  position: absolute;
  bottom: 5px;
  font-family: "Baskervville", serif;
  font-size: 0.8rem;
  color: #4E3A24;
  z-index: 4; /* Make sure text stays above image */
`;

/* Right Box (Text Content) */
const RightBoxContainer = styled.div`
  position: relative;
  width: 47%;
  height: 85%;
`;

const RightBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 3; /* Ensure text box is above slime */
`;

const Title = styled.div`
  font-family: "Passion One", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4E3A24;
  margin-bottom: 1rem;
  z-index: 4; /* Keep text above box */
`;

/* Scrollable Text */
const ArticleText = styled.div`
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  height: 70%;
  overflow-y: auto;
  padding-right: 1rem;
  z-index: 4; /* Keep text visible */
`;

/* Slime Overlays */
const SlimeLeft = styled.img`
  position: absolute;
  width: 110%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 2; /* Ensure slime is behind content */
  pointer-events: none;
`;

const SlimeRight = styled.img`
  position: absolute;
  width: 110%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 2; /* Ensure slime is behind content */
  pointer-events: none;
`;

const Slide2Desktop = ({ article }) => {
  return (
    <Background>
      {/* Yellow Text Background */}
      <BackgroundText src={BackgroundTextSVG} alt="Background Text" />

      {/* Navigation Bar */}
      <NavBar>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
      </NavBar>

      {/* Content */}
      <ContentContainer>
        {/* Left Image Box (with Slime) */}
        <LeftBoxContainer>
          <LeftBox>
            <ArticleImage src={article.article_img} alt="Article Image" />
            <ImageCredit>({article.illustration_byline})</ImageCredit>
          </LeftBox>
          <SlimeLeft src={SlimeLeftBox} alt="Left Box Slime" />
        </LeftBoxContainer>

        {/* Right Text Box (with Slime) */}
        <RightBoxContainer>
          <RightBox>
            <Title>{article.article_title}</Title>
            <ArticleText>{article.article_text}</ArticleText>
          </RightBox>
          <SlimeRight src={SlimeRightBox} alt="Right Box Slime" />
        </RightBoxContainer>
      </ContentContainer>
    </Background>
  );
};

export default Slide2Desktop;

