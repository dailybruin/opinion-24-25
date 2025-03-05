import React from "react";
import styled from "styled-components";
import Worth from "../images/self-worth.png";

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const BackgroundContainer = styled.div`
    height: 90vh;
    width: 80%;
    margin-bottom: -10%;
    margin-left: 20%;
    background: #547965;
    border-radius: 3.125rem 3.125rem;
    position: relative;
`

const ImageContainer = styled.div`
    height: 75vh;
    width: 80%;
    margin-left: 15%;
    background: url(${Worth}); 
    background-size: cover;
    background-position: center;
    border-radius: 3.125rem;
    border: 1.5em solid #CE838E; 
`

const TextContainer = styled.div`
    width: 30rem;
    height: 35rem;
    left: -15%;
    top: 25%;
    background: #547966;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;

    ::before {
        content: ''; 
        position: absolute;
        top: -1.5em; 
        left: -1.5em; 
        right: -1.5em; 
        bottom: -1.5em;
        border-radius: 3.125rem; 
        border: 1.5em solid #CE838E; 
        z-index: -1; 
      }
`

const Page = styled.div`
    position: absolute;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Page6 = styled(Page)`
    width: 28rem;
    height: 32rem;
    border-radius: 2.8125rem 2.8125rem;
`;


const Text = styled.div`
    width: 22rem;
    height: 27rem;
    color: #000;
    font-family: Baskerville;
    font-size: 1rem;
    text-align: left;
    overflow-y: auto;
`
const Title = styled.div`
    width: 100%;
    height: fit-content;
    font-family: Passion One;
    font-weight: 400;
    font-size: 4vw;
    line-height: 66.06px;
    letter-spacing: 0%;
    text-align: right;
    color: #FFFFFF;
    padding: .25em;
    text-align: center;
`

const Byline = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute; 
    top: 11%; 
    left: -5%; 
    font-family: Passion One;
    font-weight: 400;
    font-size: 2.5vw;
    line-height: 35.23px;
    letter-spacing: 0%;
    color: #547966;
    background-color: white;
    border-radius: 1.125rem; 
    border: .5em solid #CE838E;
    padding: .3em; 
`
const Credits = styled.div`
    position: absolute;
    bottom: 2%;
    left: 20%;  
    padding: 1em;
    font-family: Baskerville;
    font-size: 1rem;
    color: white;
`

const Slide4 = ({ props }) => {

    return (
        <Background>
            <BackgroundContainer>
                <Title>{props.article_title}</Title>
                <Byline>{props.article_byline}</Byline>
                <TextContainer>
                    <Page6>
                        <Text>{props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}</Text>
                    </Page6>
                </TextContainer>
                <ImageContainer>
                    <Credits>(Kaylen Ho/Daily Bruin)</Credits>  
                </ImageContainer>
            </BackgroundContainer>
        </Background>
    )
}

export default Slide4;