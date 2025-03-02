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
