import React from "react";
import styled from "styled-components";
import Slide9Image2 from "../images/Slide9Image2.png"

const Background = styled.div`
    height: auto;
    width: 100%;
    background: #383765;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Title = styled.div`
    width: 50.8775rem;
    height: 10.02844rem;
    border-radius: 0.9375rem;
    background: #B4CCFB;
    color: #383765;
    font-family: "Passion One";
    font-size: 1.875rem;
    padding: 1rem 12rem;
    box-sizing: border-box;
    text-transform: uppercase;
`
const Byline = styled.div`
    width: 16.48163rem;
    height: 2.46681rem;
    border-radius: 0.9375rem;
    background: #B4CCFB;
    color: #383765;
    font-family: "Passion One";
    font-size: 1.25rem;
    padding: 1rem 3rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
`

const TitleBylineContainer = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    overflow-x: hidden;
`

const CircleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

const Circle1 = styled(Circle)`
    width: 23.32038rem;
    height: 23.32038rem;
    border: 18px solid #B4CCFB;
    background: rgba(255, 255, 255, 0.24);
    overflow: hidden;
`

const Circle2 = styled(Circle)`
    width: 25.89781rem;
    height: 25.89781rem;
    border: 10px solid rgba(180, 204, 251, 0.85);
    backdrop-filter: blur(2px);
    padding: 1rem;
    overflow: hidden;
`

const ArticleContainer = styled.div`
    width: 16.93238rem;
    height: 23.542rem;
    border-radius: 5.6875rem;
    background: #FFF;
    color: #000;
    font-family: Baskerville;
    font-size: 0.75rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2.5rem 2rem;
    text-align: left;
    box-sizing: border-box;
    overflow-y: auto;
    flex-direction: column;
`

const ImageContainer = styled.div`
    height: 60.08463rem;
    aspect-ratio: 710.60/801.35;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-8%, -5%); /* 👈 Centers it horizontally */

`

const BackgroundImage1 = styled.div`
    width: 16.37131rem;
    height: 7.382rem;
    transform: rotate(88.39deg);
    aspect-ratio: 261.94/118.11;
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;;
    position: absolute;
    left: 15rem;
    z-index: -1;
    opacity: 1;
`
const BackgroundImage2 = styled.div`
    width: 18.64244rem;
    height: 8.40606rem;
    transform: rotate(88.901deg);
    aspect-ratio: 298.28/134.50;
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;;
    position: absolute;
    right: 15rem;
    z-index: -1;
    opacity: 1;
`

const Credit = styled.div`
    flex-shrink: 0;
    color: #FFF;
    font-family: Baskerville;
    font-size: 1rem;
    position: absolute;
    bottom: 0;  
    left: 0;
    width: auto;
`

const Slide9 = ({ props }) => {

    return (
        <Background>
            <TitleBylineContainer>
                <Title>
                    {props.article_title}
                </Title>
                <Byline>
                    {props.article_byline}
                </Byline>
            </TitleBylineContainer>
            <CircleContainer>
                <Circle2>
                     <Circle1>
                        <BackgroundImage1 image={Slide9Image2} />
                        <BackgroundImage2 image={Slide9Image2} />
                        <ArticleContainer>
                        {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
                        </ArticleContainer>
                    </Circle1>
                </Circle2>
            </CircleContainer>
            <ImageContainer image={props.article_image} />
            <Credit>
                {props.illustration_byline}
            </Credit>
        </Background>
    )
}

export default Slide9;