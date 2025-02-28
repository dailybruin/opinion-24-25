import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FBE5B6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 2.5rem;
    color: #547966;
    text-transform: uppercase;
    margin: 1rem 0;
    text-align: center;
`;

const BodyText = styled.p`
    font-family: 'Baskerville', serif;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
`;

const PlaceholderImage = styled.div`
    width: 80%;
    height: 40%;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #547966;
    border: 3px solid #547966;
    margin-top: 1rem;
`;

export default function Slide5_Mobile() {
    return (
        <Container>
            <Title>E-IDENTITY</Title>
            <BodyText>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
            </BodyText>
            <PlaceholderImage>
                Image Placeholder
            </PlaceholderImage>
        </Container>
    );
}
import React from "react";
import styled from "styled-components";
import PhoneImage from "../images/Group55.png";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #FBE5B6;
`;

const PhoneContainer = styled.div`
  width: 70vw; // Scale down for smaller screen
  max-width: 300px; // Keep it reasonable even on larger phones
  height: auto;
  aspect-ratio: 446 / 819;  // Maintain aspect ratio of the phone image
  background-image: url(${PhoneImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const ScrollableText = styled.div`
  width: 80%;
  height: 65%;
  margin-top: 12%;
  overflow-y: auto;
  padding: 0.5rem;
  font-family: "Baskervville", serif;
  font-size: 12px;
  line-height: 1.4;
  color: #383765;
  background-color: transparent;
`;

const Slide5_Mobile = ({props}) => (
  <Background>
    <PhoneContainer>
      <ScrollableText>
        {props.article_text}
      </ScrollableText>
    </PhoneContainer>
  </Background>
);

export default Slide5_Mobile;
