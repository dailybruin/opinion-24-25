import React from "react";
import styled from "styled-components";
import MapImage from "../images/map.png";

const SlideWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #393766;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-sizing: border-box;
`;

const Title = styled.div`
    color: #FBE6B6;
    font-family: "Passion One", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 1rem 0;
`;

const Map = styled.img`
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
`;

const TextContainer = styled.div`
    color: #FBE6B6;
    font-family: "Baskervville", serif;
    font-size: 12px;
    line-height: 1.4;
    text-align: left;
    width: 100%;
    height: 30%;
    overflow-y: auto;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: transparent;

    p {
        margin-bottom: 0.75rem;
    }
`;

const PhotoBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 0.5rem;
`;

const PhotoBox = styled.div`
    width: 90px;
    height: 90px;
    background-color: #FBE6B6;
`;

const Credit = styled.div`
    font-family: "Baskervville", serif;
    font-size: 12px;
    color: #FBE6B6;
    margin-top: 0.5rem;
    text-align: center;
`;

const Slide6Mobile = () => {
    return (
        <SlideWrapper>
            <Title>
                TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO HERE
            </Title>
            <Map src={MapImage} alt="World Map" />
            <TextContainer>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.</p>
                <p>Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.</p>
            </TextContainer>
            <PhotoBoxContainer>
                <PhotoBox />
                <PhotoBox />
                <PhotoBox />
            </PhotoBoxContainer>
            <Credit>(Yeejee Kim/Daily Bruin staff)</Credit>
        </SlideWrapper>
    );
};

export default Slide6Mobile;
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6A4C93;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Baskerville', serif;
    color: white;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

const BodyText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`;

const PlaceholderImage = styled.div`
    width: 200px;
    height: 200px;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #6A4C93;
    border: 3px solid white;
`;

export default function Slide6_Mobile() {
    return (
        <Container>
            <Title>EXPEDITION</Title>
            <BodyText>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
            </BodyText>
            <PlaceholderImage>
                Image Placeholder
            </PlaceholderImage>
        </Container>
    );
}
