import React from "react";
import styled from "styled-components";
import LetterBackground from "../images/Letter.png";

const Background = styled.div`
    height: fit-content;
    width: 100%;
    background: #F3D38C99;
    background-image: url(${LetterBackground}); 
    background-size: cover;  
    background-position: center;  
`
const Title = styled.div`
    height: fit-content;
    width: fit-content;
    text-align: center;
    padding-top: .5em;
    font-family: Passion One;
    font-weight: 700;
    font-size: 11.5vw;
    line-height: 165.15px;
    letter-spacing: 0%;
    color: #A75F6B;
`

const Container = styled.div`
    height: fit-content;
    width: 70%;
    margin-left: 10%;
    background-color: #A75F6B;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 2em;
`

const EditorTitle = styled.div`
    font-family: Passion One;
    font-weight: 700;
    font-size: 64px;
    line-height: 70.46px;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
`

const Text = styled.div`
    font-family: Baskerville;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.25em;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
    padding: 1.5em;
`

const ByLine = styled.div`
    font-family: Baskerville;
    font-weight: 600;
    font-size: 1.8em;
    line-height: 34.29px;
    letter-spacing: 0%;
    text-align: right;
    color: white;
    padding-right: 2em;

`


const Letter = ({letter}) => {
    return (
        <>
            <Background>
                <Title>BRUINS LOOK INWARD</Title>
                <Container>
                    <EditorTitle>LETTER FROM THE EDITOR</EditorTitle>
                    <Text>{letter.text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}</Text>
                    <ByLine>-Russell Ahmed</ByLine>
                </Container>
            </Background>
        </>
    )
}

export default Letter;