import React from 'react';
import styled from 'styled-components';
import leftImage from '../images/slide8.png';

const Slide8Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFE5B0;
  padding: 2rem 0 0;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  gap: 2rem;
  flex-grow: 1;
`;

const ImageSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IllustrationContainer = styled.div`
  width: 100%;
  margin-bottom: -1px;
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border: 1px solid #2A5AA0;
  border-radius: 4px;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: -1px;
  outline: 6px solid #A0A0A0;
  outline-offset: -4px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

const Text = styled.div`
  color: #333;
  font-size: 0.85rem;
  line-height: 1.2;
  margin: 0;
  padding: 0.35rem 0;
  text-align: left;
  width: 100%;
`;

const SmallBrickWall = styled.svg`
  width: 100%;
  display: block;
`;

const LargeBrickWall = styled.svg`
  width: 100%;
  display: block;
`;

const Credit = styled.div`
  font-size: ${props => props.large ? '1.5rem' : '0.8rem'};
  color: ${props => props.large ? '#393769' : '#333'};
  margin-top: 0.5rem;
  text-align: right;
  font-weight: ${props => props.large ? '800' : 'normal'};
  font-family: ${props => props.large ? 'Georgia, serif' : 'inherit'};
`;

const Title = styled.div`
  font-size: 2rem;
  color: #393769;
  text-align: right;
  margin-top: 1rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
`;

const Slide8 = () => {
  return (
    <Slide8Container>
      <ContentContainer>
        <ImageSection>
          <IllustrationContainer>
            <img src={leftImage} alt="Left section illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </IllustrationContainer>
          <SmallBrickWall width="475" height="71" viewBox="0 0 475 71" fill="none">
            <rect x="37" y="18" width="406" height="53" fill="#C3C0C0"/>
            <rect x="30" y="12" width="409" height="53" fill="#D9D9D9"/>
            <rect x="112" y="14" width="76" height="23" fill="#D45353"/>
            <rect x="30" y="15" width="76" height="23" fill="#AA2D2D"/>
            <rect x="363" y="14" width="76" height="23" fill="#AA2D2D"/>
            <rect x="195" y="14" width="76" height="23" fill="#AA2D2D"/>
            <rect x="277" y="14" width="77" height="23" fill="#CA6F41"/>
            <rect x="363" y="43" width="76" height="23" fill="#AA2D2D"/>
            <rect y="5" width="475" height="14" fill="#693C25"/>
            <rect x="4" width="467" height="14" fill="#945739"/>
            <rect x="112" y="43" width="76" height="23" fill="#D45353"/>
            <rect x="30" y="44" width="76" height="23" fill="#AA2D2D"/>
            <rect x="195" y="43" width="76" height="23" fill="#D45353"/>
            <rect x="277" y="43" width="77" height="23" fill="#CA6F41"/>
          </SmallBrickWall>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
            <Credit>(Helen Park/Illustrations director)</Credit>
          </div>
        </ImageSection>
        <TextContainer>
          <TextSection>
            <Text>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Per neque this orci nunc interdum pellentesque turpis. Ligula fames per id porta sed erit. Arcu mattium turpis accumsan finibus consect amet. Duis quam officiat nunc finibus aperture nunc. Exercitat ac neque justo cursus posuere sapien Etiam ut.
            </Text>
            <Text>
              Hendrerit enim sint suspendisse ante amet. Ut eget odio fames eu efficitur placerat sed ac vitality. Tempor efficitur posuere posuere justo cursus. Maecenas molestie lacus condimen, orci condimentum digniss est. At eros sed id lectus neque faucin manus. Eros adipiscing cursus neque nisi metus volutpat sem diam odio. Arcu amet orbitia forra nascetur pellentesque tincidunla.
            </Text>
            <Text>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Per neque this orci nunc interdum pellentesque turpis. Ligula fames per id porta sed erit. Arcu mattium turpis accumsan finibus consect amet. Duis quam officiat nunc finibus aperture nunc. Exercitat ac neque justo cursus posuere sapien Etiam ut.
            </Text>
            <Text>
              Hendrerit enim sint suspendisse ante amet. Ut eget odio fames eu efficitur placerat sed ac vitality. Tempor efficitur posuere posuere justo cursus. Maecenas molestie lacus condimen, orci condimentum digniss est. At eros sed id lectus neque faucin manus. Eros adipiscing cursus neque nisi metus volutpat sem diam odio. Arcu amet orbitia forra nascetur pellentesque tincidunla.
            </Text>
            <Text>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Per neque this orci nunc interdum pellentesque turpis. Ligula fames per id porta sed erit. Arcu mattium turpis accumsan finibus consect amet. Duis quam officiat nunc finibus aperture nunc. Exercitat ac neque justo cursus posuere sapien Etiam ut.
            </Text>
            <Text>
              Hendrerit enim sint suspendisse ante amet. Ut eget odio fames eu efficitur placerat sed ac vitality. Tempor efficitur posuere posuere justo cursus. Maecenas molestie lacus condimen, orci condimentum digniss est. At eros sed id lectus neque faucin manus. Eros adipiscing cursus neque nisi metus volutpat sem diam odio. Arcu amet orbitia forra nascetur pellentesque tincidunla.
            </Text>
          </TextSection>
          <LargeBrickWall width="769" height="70" viewBox="0 0 769 70" fill="none">
            <rect x="23" y="17" width="738" height="53" fill="#C3C0C0"/>
            <rect x="17" y="11" width="738" height="53" fill="#D9D9D9"/>
            <rect x="182" y="14" width="76" height="23" fill="#D45353"/>
            <rect x="515" y="13" width="76" height="23" fill="#CA6F41"/>
            <rect x="100" y="15" width="76" height="23" fill="#AA2D2D"/>
            <rect x="433" y="14" width="76" height="23" fill="#AA2D2D"/>
            <rect x="265" y="14" width="76" height="23" fill="#AA2D2D"/>
            <rect x="598" y="13" width="76" height="23" fill="#D45353"/>
            <rect x="347" y="14" width="77" height="23" fill="#CA6F41"/>
            <rect x="680" y="13" width="77" height="23" fill="#CA6F41"/>
            <rect x="17" y="15" width="76" height="23" fill="#D45353"/>
            <rect x="515" y="42" width="76" height="23" fill="#D45353"/>
            <rect x="433" y="43" width="76" height="23" fill="#AA2D2D"/>
            <rect x="598" y="42" width="76" height="23" fill="#AA2D2D"/>
            <rect x="680" y="42" width="77" height="23" fill="#AA2D2D"/>
            <rect y="5" width="769" height="14" fill="#693C25"/>
            <rect x="5" width="758" height="14" fill="#945739"/>
            <rect x="182" y="43" width="76" height="23" fill="#D45353"/>
            <rect x="100" y="44" width="76" height="23" fill="#AA2D2D"/>
            <rect x="265" y="43" width="76" height="23" fill="#D45353"/>
            <rect x="347" y="43" width="77" height="23" fill="#CA6F41"/>
            <rect x="17" y="44" width="76" height="23" fill="#CA6F41"/>
          </LargeBrickWall>
          <Credit large>Nick Levie</Credit>
          <Title>NAME OF THE TITLE</Title>
        </TextContainer>
      </ContentContainer>
    </Slide8Container>
  );
};

export default Slide8;