import React from "react";
import styled from "styled-components";
import LetterBackground from "../images/Letter.png";

const Background = styled.div`
    height: 150vh;
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
    font-size: 1.5vw;
    line-height: 28.6px;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
    padding: 2.5em;
`

const ByLine = styled.div`
    font-family: Baskerville;
    font-weight: 600;
    font-size: 2vw;
    line-height: 34.29px;
    letter-spacing: 0%;
    text-align: right;
    color: white;
    padding-right: 2em;

`


const Letter = () => {
    return (
        <>
            <Background>
                <Title>BRUINS LOOK INWARD</Title>
                <Container>
                    <EditorTitle>LETTER FROM THE EDITOR</EditorTitle>
                    <Text>Daily we are afforded the opportunity to experiment with versions of ourselves that didn’t previously exist. As we go about our lives, we encounter a highly variable world that presents a dynamic blend of shortcoming and triumph to shape the person we are.

Our time as a Bruin marks a critical segment of our lives during which we have a unique grasp over how this process plays out in real time. We are positioned to be hyper-aware of how our experiences affect us, along with how we can grow from them. 

Consequently, the passions and the people we pursue inevitably yield unforeseen circumstances that test us: how does one manage living up to their own expectations? What about the expectations of others? 

It is daunting to ask ourselves the big questions – to find our “why?”. But it is a beyond worthwhile task.

Contributors to [this flatpage title here] have actively engaged in this process, and they have written about their findings. It is a catalogue of some of the most introspective, inquisitive Bruins out there. Through their hard work, I hope you can glean something that can make your life better. Whether that is a new hobby you revive or a new mindset you take on in your personal life, these writers are likely grappling with things that you have encountered. 

If not, they are likely things that you will encounter; when the time comes, this archive of life lessons and personal insights will be here for you.

Life is a beautiful, messy and senseless game of trial and error, after all. To some of its most critical questions, there may not be a “right” answer, but endeavoring to find it keeps us busy, nonetheless.</Text>
                    <ByLine>-Russell Ahmed</ByLine>
                </Container>
            </Background>
        </>
    )
}

export default Letter;