import React from "react";
import styled from "styled-components";
import MapImage from "../images/map.png";

// Outer wrapper — locks slide to proper size
const SlideWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    position: relative;
`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: #393766;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
`;

// Adding the border BACK to match design
const LeftTextContainer = styled.div`
    width: 26%;
    height: 85%;
    color: #FBE6B6;
    font-family: "Baskervville", serif;
    font-size: 14px;
    line-height: 1.5;
    overflow-y: auto;
    padding: 1rem;
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid #FBE6B6;  // This is the border we had lost

    position: relative;
    left: 20px;   // Slight nudge to the right
    top: 60px;   // Slight nudge down

    p {
        margin-bottom: 1rem;
    }
`;

const RightContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: calc(60vw - (750px / 2));  // Centered around 60%, and slightly larger
    width: 750px;
    height: auto;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Map = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.div`
    position: absolute;
    top: 39%;
    width: 100%;
    text-align: center;
    color: #FBE6B6;
    font-family: "Passion One", sans-serif;
    font-size: 3.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const PhotoBoxContainer = styled.div`
    display: flex;
    gap: 13px;
    margin-top: 1.5rem;
    transform: translateX(-5%);
`;

const PhotoBox = styled.div`
    width: 250px;
    height: 250px;
    background-color: #FBE6B6;
`;

const Credit = styled.div`
    font-family: "Baskervville", serif;
    font-size: 14px;
    color: #FBE6B6;
    margin-top: 0.5rem;
    text-align: right;
    width: 100%;
`;

const Slide6 = ({props}) => {
    return (
        <SlideWrapper>
            <Background>
                <LeftTextContainer>
                    {props.article_text}
                </LeftTextContainer>

                <RightContentContainer>
                    <Title>
                        {props.article_title}
                    </Title>
                    <Map src={MapImage} alt="World Map" />
                    <PhotoBoxContainer>
                        <PhotoBox />
                        <PhotoBox />
                        <PhotoBox />
                    </PhotoBoxContainer>
                    <Credit>(Yeejee Kim/Daily Bruin staff)</Credit>
                </RightContentContainer>
            </Background>
        </SlideWrapper>
    );
};

export default Slide6;
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6A4C93;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Baskerville', serif;
    color: white;
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const BodyText = styled.p`
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 2rem;
`;

const PlaceholderImage = styled.div`
    width: 300px;
    height: 300px;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #6A4C93;
    border: 5px solid white;
`;

export default function Slide6() {
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
