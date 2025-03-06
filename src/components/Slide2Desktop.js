import React from "react";
import styled from "styled-components";

import BackgroundTextSVG from "../images/slide2bg.svg"; 
import SlimeLeftBox from "../images/slide2box1slime.svg";
import SlimeRightBox from "../images/slide2box2.svg";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #FFE5B0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
`;

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
  margin-top: 4rem;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const LeftBoxContainer = styled.div`
  position: relative;
  width: 60%; /* Adjusted to match the right box */
  height: 85%;
  background: url(${SlimeLeftBox}) center/contain no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

const ArticleImage = styled.img`
  width: 88%; /* Adjusted to fit inside the brown border */
  height: 84%; /* Adjusted to fit inside the brown border */
  object-fit: contain; /* Ensures the image fits within the container */
  position: absolute;
  top: 44%; /* Move the image higher up */
  left: 52%; /* Move the image slightly to the right */
  transform: translate(-50%, -50%); /* Centers the image */
  z-index: 2;
`;

const ImageCredit = styled.div`
  position: absolute;
  bottom: 80px; /* Adjust as needed */
  right: 80px; /* Adjust as needed */
  font-family: "Baskervville", serif;
  font-size: 0.8rem;
  color: #4E3A24;
  z-index: 5; /* Higher than the image to ensure it's on top */
  padding: 2px 6px;
  border-radius: 4px;
`;

const RightBoxContainer = styled.div`
  position: relative;
  width: 60%; /* Adjusted to match the left box */
  height: 80%;
  background: url(${SlimeRightBox}) center/contain no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  width: 70%; /* Slightly reduced width to prevent overflow */
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align text to the top */
  align-items: center; /* Center text horizontally */
  overflow: hidden; /* Prevent overflow */
  margin-top: -2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }
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
  height: 100%; /* Take up remaining space */
  width: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 0 1rem;
  text-align: justify;
  overflow-wrap: break-word; /* Ensure long words break and wrap */
  word-wrap: break-word; /* Fallback for older browsers */
`;

const Slide2Desktop = ({ props }) => {
  return (
    <Background>
      <BackgroundText src={BackgroundTextSVG} alt="Background Text" />

      <ContentContainer>
        {/* Left Box (Slime outline, image inside) */}
        <LeftBoxContainer>
          <ArticleImage src={props.article_image} alt="Article Image" />
          {/* Image Credit inside LeftBoxContainer */}
          <ImageCredit>(Nim Seshradi/ Cartoons Director)</ImageCredit>
        </LeftBoxContainer>

        {/* Right Box (Slime outline, text inside) */}
        <RightBoxContainer>
          <TextContainer>
            <Title>{props.article_title}</Title>
            <ArticleText>
              {props.article_text.split("/n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </ArticleText>
          </TextContainer>
        </RightBoxContainer>
      </ContentContainer>
    </Background>
  );
};

export default Slide2Desktop;

