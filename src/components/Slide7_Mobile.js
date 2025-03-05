import React from "react";
import styled from "styled-components";
import Background from "../images/Slide7_MobileBackground.png";
import { Carousel } from "../components/Carousel";


const Container = styled.div`
    margin-top: 2em;
    height: 150vh;
    width: 100%;
    background: url(${Background});
    background-color: #547865;
    position: relative;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center; 
`
const Title = styled.div`
    width: 50%;
    font-family: Passion One;
    font-weight: 400;
    font-size: 5vw;
    line-height: 1em;
    letter-spacing: 0%;
    text-align: right;
    color: #FBE6B6;
    padding: .5em;
    text-align: left;
    margin-top: 2em;
    margin-left: 2em;
`
const Byline = styled.div`
    width: 30%;
    height: fit-content;
    font-family: Passion One;
    font-weight: 400;
    font-size: 32px;
    line-height: 35.23px;
    letter-spacing: 0%;
    color: #FBE6B6;
    margin-bottom: 3em;
    text-align: left;
    margin-left: 2em;
`

const TextContainer = styled.div`
    width: 100%; 
    height: 30%;
    font-family: "Baskervville", serif;
    font-size: 1rem;
    color: #FBE6B6;
    line-height: 1.5;
    overflow-y: auto;
    padding-right: 1rem;
    box-sizing: border-box;
    background-color: #393766;
    border: 1em solid white; 
    margin-left: .5em;
`;

const CarouselContainer = styled.div`
    position: absolute;
    left: 190px;
    bottom: 40px;
    transform: translateX(-50%) rotate(-9deg); 
    width: 23em;
    max-width: 65%;
    margin-bottom: 0;
`;


const Slide7_Mobile = ({props}) => {
  const image_slides = [
    {
      src: props.article_image_1,
      alt: "Image 1 for carousel"
    },
    {
      src: props.article_image_2,
      alt: "Image 2 for carousel"
    },
    {
      src: props.article_image_3,
      alt: "Image 3 for carousel"
    }
  ];
      
    return (
        <>
        <Container>
            <Title>{props.article_title}</Title>
            <Byline>{props.article_byline}</Byline>
            <TextContainer>
            {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
            </TextContainer>
            <CarouselContainer>
                <Carousel data={image_slides} />
            </CarouselContainer>
        </Container>
        
      </>
    )
}

export default Slide7_Mobile;