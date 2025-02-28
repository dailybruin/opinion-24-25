import React from "react";
import styled from "styled-components";
import PhoneImage from "../images/Group55.png";
import BubbleImage from "../images/Group56.png";

const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #FBE5B6;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
`;

// Bubbles container sits to the left of phone, anchored at roughly 60vw
const BubbleContainer = styled.div`
  width: 679px;
  height: 486px;
  background-image: url(${BubbleImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: calc(75vw - 446px - 679px - 20px); /* phone at 75vw - phone width - bubbles width - buffer space */
  top: 50%;
  transform: translateY(-50%);
`;

// Text inside the bubbles
const BubbleText = styled.div`
  position: absolute;
  top: 12%;
  left: 10%;
  font-family: "Passion One", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

const NameText = styled.div`
  position: absolute;
  top: 62%;
  left: 70%; /* Anchored over second bubble */
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

// Phone container sits exactly at 75vw
const PhoneContainer = styled.div`
  width: 446px;
  height: 819px;
  background-image: url(${PhoneImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: calc(75vw - 223px); /* Center the phone horizontally at 75vw */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

// Text inside the phone screen
const ScrollableText = styled.div`
  width: 80%;
  height: 72%;
  margin-top: 90px;
  overflow-y: auto;
  padding: 1rem;
  font-family: "Baskervville", serif;
  font-size: 14px;
  line-height: 1.5;
  color: #383765;
  background-color: transparent;
`;

const Slide5 = ({props}) => (
  <Background>
    <ContentWrapper>
      <BubbleContainer>
        <BubbleText>
          {props.article_title}
        </BubbleText>
        <NameText>{props.article_byline}</NameText>
      </BubbleContainer>

      <PhoneContainer>
        <ScrollableText>
          {props.article_text}
        </ScrollableText>
      </PhoneContainer>
    </ContentWrapper>
  </Background>
);

export default Slide5;
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FBE5B6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
`;

const LeftColumn = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Baskerville', serif;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 3.5rem;
    color: #547966;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const BodyText = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: black;
`;

const RightColumn = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlaceholderImage = styled.div`
    width: 90%;
    height: 80%;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #547966;
    border: 4px solid #547966;
`;

export default function Slide5() {
    return (
        <Container>
            <LeftColumn>
                <Title>E-IDENTITY</Title>
                <BodyText>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
                </BodyText>
            </LeftColumn>
            <RightColumn>
                <PlaceholderImage>
                    Image Placeholder
                </PlaceholderImage>
            </RightColumn>
        </Container>
    );
}
