import React from "react";
import styled from "styled-components";
import leftImage from "../images/slide8.png";

const Slide8Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffe5b0;
  padding: 1rem;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ImageSection = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IllustrationContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const TextSection = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #2a5aa0;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  outline: 4px solid #a0a0a0;
  outline-offset: -3px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  color: #333;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  padding: 0.35rem 0;
  text-align: left;
  font-family: "Baskervville", serif;
`;

const SmallBrickWall = styled.svg`
  width: 100%;
  height: auto;
  max-width: 400px;
`;

const LargeBrickWall = styled.svg`
  width: 100%;
  height: auto;
  max-width: 400px;
`;

const Credit = styled.div`
  font-size: ${(props) => (props.large ? "1.25rem" : "0.8rem")};
  color: ${(props) => (props.large ? "#393769" : "#333")};
  margin-top: 0.5rem;
  text-align: right;
  font-weight: ${(props) => (props.large ? "500" : "normal")};
  font-family: ${(props) => (props.large ? "Georgia, serif" : "inherit")};
`;

const Title = styled.div`
  font-size: 2rem;
  color: #393769;
  text-align: center;
  margin-top: 1rem;
  font-weight: 400;
  font-family: "Passion One";
`;

const Slide8_Mobile = ({ props }) => {
  return (
    <Slide8Container>
      <ContentContainer>
        <Title style={{ textAlign: "right" }}>{props.article_title}</Title>

        <Credit
          large
          style={{
            fontFamily: "Passion One",
            fontSize: "1.5rem",
            textAlign: "right",
            alignSelf: "flex-end"
          }}
        >
          {props.article_byline}
        </Credit>
        <ImageSection>
          <IllustrationContainer style={{ alignSelf: 'flex-start' }}>
            <img src={props.article_image} alt="Left section illustration" style={{ alignSelf: 'flex-start'}}/>
          </IllustrationContainer>
          <SmallBrickWall viewBox="0 0 475 71" fill="none" style={{ alignSelf: 'flex-start' }}>
            <rect x="37" y="18" width="406" height="53" fill="#C3C0C0" />
            <rect x="30" y="12" width="409" height="53" fill="#D9D9D9" />
            <rect x="112" y="14" width="76" height="23" fill="#D45353" />
            <rect x="30" y="15" width="76" height="23" fill="#AA2D2D" />
            <rect x="363" y="14" width="76" height="23" fill="#AA2D2D" />
            <rect x="195" y="14" width="76" height="23" fill="#AA2D2D" />
            <rect x="277" y="14" width="77" height="23" fill="#CA6F41" />
            <rect x="363" y="43" width="76" height="23" fill="#AA2D2D" />
            <rect y="5" width="475" height="14" fill="#693C25" />
            <rect x="4" width="467" height="14" fill="#945739" />
            <rect x="112" y="43" width="76" height="23" fill="#D45353" />
            <rect x="30" y="44" width="76" height="23" fill="#AA2D2D" />
            <rect x="195" y="43" width="76" height="23" fill="#D45353" />
            <rect x="277" y="43" width="77" height="23" fill="#CA6F41" />
          </SmallBrickWall>
          <Credit style={{ textAlign: 'left', alignSelf: 'flex-start' }}>(Helen Park/Illustrations director)</Credit>
        </ImageSection>

        <TextContainer>
          <TextSection>
            <Text>
              {props.article_text.split("/n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Text>
          </TextSection>
          <LargeBrickWall
            viewBox="0 0 769 70"
            fill="none"
            style={{ transform: "scale(1.1)", margin: "1rem auto" }}
          >
            <rect x="23" y="17" width="738" height="53" fill="#C3C0C0" />
            <rect x="17" y="11" width="738" height="53" fill="#D9D9D9" />
            <rect x="182" y="14" width="76" height="23" fill="#D45353" />
            <rect x="515" y="13" width="76" height="23" fill="#CA6F41" />
            <rect x="100" y="15" width="76" height="23" fill="#AA2D2D" />
            <rect x="433" y="14" width="76" height="23" fill="#AA2D2D" />
            <rect x="265" y="14" width="76" height="23" fill="#AA2D2D" />
            <rect x="598" y="13" width="76" height="23" fill="#D45353" />
            <rect x="347" y="14" width="77" height="23" fill="#CA6F41" />
            <rect x="680" y="13" width="77" height="23" fill="#CA6F41" />
            <rect x="17" y="15" width="76" height="23" fill="#D45353" />
            <rect x="515" y="42" width="76" height="23" fill="#D45353" />
            <rect x="433" y="43" width="76" height="23" fill="#AA2D2D" />
            <rect x="598" y="42" width="76" height="23" fill="#AA2D2D" />
            <rect x="680" y="42" width="77" height="23" fill="#AA2D2D" />
            <rect y="5" width="769" height="14" fill="#693C25" />
            <rect x="5" width="758" height="14" fill="#945739" />
            <rect x="182" y="43" width="76" height="23" fill="#D45353" />
            <rect x="100" y="44" width="76" height="23" fill="#AA2D2D" />
            <rect x="265" y="43" width="76" height="23" fill="#D45353" />
            <rect x="347" y="43" width="77" height="23" fill="#CA6F41" />
            <rect x="17" y="44" width="76" height="23" fill="#CA6F41" />
          </LargeBrickWall>
        </TextContainer>
      </ContentContainer>
    </Slide8Container>
  );
};

export default Slide8_Mobile;