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
    left: calc(60vw - (35em / 2));  // Centered around 60%, and slightly larger
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
    top: 2em;
    width: 100%;
    text-align: center;
    color: #FBE6B6;
    font-family: "Passion One", sans-serif;
    font-size: 3.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
`;

const ByLine = styled.div`
    position: absolute;
    top: 12em;
    left: -9em;
    width: 100%;
    text-align: center;
    color: #FBE6B6;
    font-family: "Passion One", sans-serif;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
`;

const PhotoBoxContainer = styled.div`
    display: flex;
    gap: 4%;
    margin-top: 3rem;
    transform: translateX(-5%);
`;

const PhotoBox = styled.div`
    width: 15em;
    height: 10em;
    background-color: #FBE6B6;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;  
    }
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
                {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
                </LeftTextContainer>

                <RightContentContainer>
                    <Title>
                        {props.article_title}
                    </Title>
                    <ByLine>{props.article_byline}</ByLine>
                    <Map src={MapImage} alt="World Map" />
                    <PhotoBoxContainer>
                        <PhotoBox>
                            <img src={props.article_image_1} alt="Image 1" />
                        </PhotoBox>
                        <PhotoBox>
                            <img src={props.article_image_2} alt="Image 2" />
                        </PhotoBox>
                        <PhotoBox>
                            <img src={props.article_image_3} alt="Image 3" />
                        </PhotoBox>
                    </PhotoBoxContainer>
                    <Credit>(Yeejee Kim/Daily Bruin staff)</Credit>
                </RightContentContainer>
            </Background>
        </SlideWrapper>
    );
};

export default Slide6;
