import React from "react";
import styled from "styled-components";
import Slide9Image1 from "../images/Slide9Image1.png"
import Slide9Image2 from "../images/Slide9Image2.png"

const Background = styled.div`
    padding-top: 4rem;
    height: 100vh;
    width: 100%;
    background: #383765;
    display: flex;
    justify-content: space-between;
    position: relative;
`

const Title = styled.div`
    width: 50.8775rem;
    height: 7.47263rem;
    border-radius: 0.9375rem;
    background: #B4CCFB;
    color: #383765;
    font-family: "Passion One";
    font-size: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    text-transform: uppercase;
    align-items: center;
    display: flex;
`
const Byline = styled.div`
    width: 15.48163rem;
    height: 3.46494rem;
    border-radius: 0.9375rem;
    background: #B4CCFB;
    color: #383765;
    font-family: "Passion One";
    font-size: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
`

const TitleBylineContainer = styled.div`
    margin: 3rem 4rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 35rem;
`

const Circle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

const Circle1 = styled(Circle)`
    width: 41.302rem;
    height: 41.302rem;
    border: 43px solid #B4CCFB;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.24);
    pointer-events: none;
    position: relative;
`

const Circle2 = styled(Circle)`
    width: 45.875rem;
    height: 45.875rem;
    border: 17px solid rgba(180, 204, 251, 0.85);
    backdrop-filter: blur(2px);
    padding: 1.5rem;
    pointer-events: none;
`

const Circle3 = styled(Circle)`
    width: 50.45306rem;
    height: 50.45306rem;
    border: 17px solid rgba(180, 204, 251, 0.85);
    backdrop-filter: blur(2px);
    padding: 1.5rem;
    pointer-events: none;
`

const ArticleContainer = styled.div`
    width: 28.77213rem;
    height: 41.62031rem;  
    border-radius: 8.3125rem;
    background: #FFF;
    color: #000;
    font-family: Baskerville;
    font-size: 1rem;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4rem 2rem;  
    
`

const TextContainer = styled.div`
    width: 25.50906rem;
    height: 30.52756rem;
    color: #000;
    font-family: Baskerville;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    overflow-y: auto;
    text-align: left;
    position: absolute;
    z-index: 999;
    top: 53%;
    left: 35em;
    transform: translate(-50%, -50%);
`


const ImageContainer = styled.div`
    width: 50.03106rem;
    height: 59.78638rem;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: 102%;
    position: relative;
    left: 0rem;
    top: 0rem;
`

const BackgroundImage1 = styled.div`
    width: 44.03106rem;
    height: 19.85413rem;
    transform: rotate(88deg);
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;
    position: absolute;
    left: 15rem;
    z-index: -1;
    opacity: 1;

`
const BackgroundImage2 = styled.div`
    width: 44.03106rem;
    height: 19.85413rem;
    transform: rotate(450.598deg);
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;;
    position: absolute;
    right: 15rem;
    z-index: -1;
    opacity: 1;
`

const BackgroundImage3 = styled.div`
    width: 44.03106rem;
    height: 19.85413rem;
    transform: rotate(0deg);
    background-cover: contain;
    background: url(${(props) => props.image}) 30% 50% / 100% 200.055% no-repeat;
    position: absolute;
    left: -15rem;
    top: 45rem;
    opacity: 1;
`

const Credit = styled.div`
    flex-shrink: 0;
    color: #FFF;
    font-family: Baskerville;
    font-size: 1rem;
    position: absolute;
    bottom: 1rem;  
    right: 4rem;  
    width: auto;
`

const Slide9 = ({ props }) => {

    return (
        <Background>
            <BackgroundImage3 image={Slide9Image2} />
            <CircleContainer>
                <Circle3>
                    <Circle2>
                        <Circle1>
                            <BackgroundImage1 image={Slide9Image2} />
                            <BackgroundImage2 image={Slide9Image2} />
                            <ArticleContainer />
                        </Circle1>
                    </Circle2>
                </Circle3>
            </CircleContainer>
            <TextContainer>
                {props.article_text.split('/n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </TextContainer>
            <TitleBylineContainer>
                <Title>
                    {props.article_title}
                </Title>
                <Byline>
                    {props.article_byline}
                </Byline>
            </TitleBylineContainer>
            <ImageContainer image={props.article_image} />
            <Credit>
                {props.illustration_byline}
            </Credit>
        </Background>
    )
}

export default Slide9;