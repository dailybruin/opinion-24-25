import React from "react";
import styled from "styled-components";

import BackgroundTextSVG from "../images/slide2bg.svg"; // Yellow text SVG
import SlimeLeftBox from "../images/slide2box1slime.svg"; // Left box slime container
import SlimeRightBox from "../images/slide2box2.svg"; // Right box slime container

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
  width: 85%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  z-index: 2;
`;

const BoxContainer = styled.div`
  position: relative;
  flex: 1; /* Makes both boxes grow equally */
  height: 85%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

/* Left Box */
const LeftBoxContainer = styled(BoxContainer)`
  background-image: url(${SlimeLeftBox});
  height: 90%
`;

/* Right Box */
const RightBoxContainer = styled(BoxContainer)`
  background-image: url(${SlimeRightBox});
  flex-direction: column; 
  padding: 2rem;
`;

/* Image inside Left Box */
const ImageContainer = styled.div`
  width: 80%;  
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 150%;
  height: 100%;
  object-fit: contain;
`;

/* Text inside Right Box */
const TextContainer = styled.div`
  width: 80%;
  height: 78%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-top: -2rem; /* Move the whole text container up */
`;

const Title = styled.div`
  font-family: "Passion One", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #4E3A24;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`;

const ArticleText = styled.div`
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  height: 62%;
  width: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  text-align: justify;
`;



/* Image Credit */
const ImageCredit = styled.div`
  position: absolute;
  bottom: 5px;
  font-family: "Baskervville", serif;
  font-size: 0.8rem;
  color: #4E3A24;
  z-index: -1;
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
          <ImageContainer>
            <ArticleImage src={props.article_image} alt="Article Image" />
          </ImageContainer>
          <ImageCredit>({props.illustration_byline})</ImageCredit>
        </LeftBoxContainer>

        {/* Right Box (Text inside slime container) */}
        <RightBoxContainer>
          <TextContainer>
            <Title>{props.article_title}</Title>
            <ArticleText>{props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}</ArticleText>
          </TextContainer>
        </RightBoxContainer>
      </ContentContainer>
    </Background>
  );
};

export default Slide2Desktop;

