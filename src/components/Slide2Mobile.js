import React from "react";
import styled from "styled-components";

import BackgroundTextSVG from "../images/slide2bg.svg"; // Yellow text SVG
import SlimeTopBox from "../images/slide2box1slime.svg"; // Top box slime
import SlimeBottomBox from "../images/slide2box2.svg"; // Bottom box slime
import WhiteTitleBoxSVG from "../images/slide2whitemobile.svg"; // White box for title

const Background = styled.div`
  height: 150vh;
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

/* Title Box (White Box at the Top) */
const TitleBox = styled.img`
  position: relative;
  width: 80%;
  margin-top: 2rem;
  z-index: 3;
`;

/* Title Text */
const TitleText = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #4E3A24;
  text-align: center;
  width: 75%;
  z-index: 4;
`;

/* Main Content Stacked */
const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  z-index: 2;
`;

/* Top Box - Image */
const TopBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Image Box */
const TopBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

/* Image Wrapper */
const ArticleImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index:1;
`;

/* Image */
const ArticleImage = styled.img`
  width: 75%;
  height: auto%;
  max-height: 100%;
  object-fit: contain;
  margin-top:-3.5rem;
  display: block;
`;

/* Image Credit */
const ImageCredit = styled.div`
  position: absolute;
  bottom: 5px;
  font-family: "Baskervville", serif;
  font-size: 0.8rem;
  color: #4E3A24;
  z-index: 8;
`;

/* Bottom Box - Article Text */
const BottomBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Text Content */
const BottomBox = styled.div`
  width: 70%;
  height: 90%;
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 3;
  overflow: hidden;
`;

/* Scrollable Text */
const ArticleText = styled.div`
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  height: 82%;
  overflow-y: auto;
  padding-right: 0.5rem;
  z-index: 4;
`;

/* Slime Overlays */
const SlimeTop = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
`;

const SlimeBottom = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
`;

const Slide2Mobile = ({ props }) => {
  return (
    <Background>
      {/* Yellow Text Background */}
      <BackgroundText src={BackgroundTextSVG} alt="Background Text" />

      {/* Title Box */}
      <TitleBox src={WhiteTitleBoxSVG} alt="Title Box" />
      <TitleText>{props.article_title}</TitleText>

      {/* Main Content */}
      <ContentContainer>
        {/* Top Image Box */}
        <TopBoxContainer>
          <TopBox>
            <ArticleImageWrapper>
              <ArticleImage src={props.article_image} alt="Article Image" />
            </ArticleImageWrapper>
            <ImageCredit>({props.illustration_byline})</ImageCredit>
          </TopBox>
          <SlimeTop src={SlimeTopBox} alt="Top Box Slime" />
        </TopBoxContainer>

        {/* Bottom Text Box */}
        <BottomBoxContainer>
          <BottomBox>
            <ArticleText>{props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}</ArticleText>
          </BottomBox>
          <SlimeBottom src={SlimeBottomBox} alt="Bottom Box Slime" />
        </BottomBoxContainer>
      </ContentContainer>
    </Background>
  );
};

export default Slide2Mobile;