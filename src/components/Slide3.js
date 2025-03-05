import React from "react";
import styled from "styled-components";
import Circle from "../images/Circle.svg"
import Check from "../images/Check.svg"
import Binding from "../images/Binding.svg"
import Pencil from "../images/Pencil.png"
import Stroke from "../images/Stroke.svg"

const Background = styled.div`
    padding-top: 2rem;
    height: 100vh;
    width: 100%;
    background: #CE838E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow-x: auto;
`

const Container2 = styled.div`
    width: 35.0625rem;
    height: 41.875rem;
    border-radius: 0rem 3.125rem 3.125rem 0rem;
    background: #547966;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
`

const Page = styled.div`
    position: absolute;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* LEFT NOTEBOOK PAGES */
const Page1 = styled(Page)`
    width: 33.1875rem;
    height: 39.625rem;
    border-radius: 2.8125rem 0 0 2.8125rem;
    top: 1.5rem;
    left: 1rem;
`;
const Page2 = styled(Page)`
    width: 32.875rem;
    height: 39.25rem;
    border-radius: 2.8125rem 0 0 2.8125rem;
    top: 1.5rem;
    left: 1.2rem;
`;
const Page3 = styled(Page)`
    width: 32.5625rem;
    height: 38.8125rem;
    border-radius: 2.8125rem 0 0 2.8125rem;
    top: 1.5rem;
    left: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

/* RIGHT NOTEBOOK PAGES */
const Page4 = styled(Page)`
    width: 33.1875rem;
    height: 39.625rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1rem;
`;
const Page5 = styled(Page)`
    width: 32.875rem;
    height: 39.25rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1.2rem;
`;
const Page6 = styled(Page)`
    width: 32.5625rem;
    height: 38.8125rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1.4rem;
`;

const Container1 = styled.div`
    width: 35.0625rem;
    height: 41.875rem;
    border-radius: 3.125rem 0  0 3.125rem;
    background: #547966;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NotebookContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-right: 10rem;
`;

const BindingContainer = styled.div`
    width: 6.8rem; /* Width of binding */
    height: 37.875rem;
    position: absolute;
    left: 50%; /* Center binding */
    transform: translateX(-50%);
    z-index: 10; /* Ensure it is over the notebook pages */

    background-image: url(${Binding});
    background-repeat: repeat-y; /* Repeat vertically */
    background-size: 100% 4rem; /* Set the spacing between repetitions */
    background-position: center;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    position: relative;
    flex-shrink: 0; /* Ensures it doesn't shrink when resizing */
    margin-left: 4rem; /* Adds space from the left */
    margin-right: 5.2rem;
`;

const StrokeImage = styled.img`
    width: 10.66494rem;
    height: 23.93144rem;
`;

const PencilImage = styled.img`
    width: 5.5rem; /* Adjust size */
    height: 25rem;
`;

const Title = styled.a`
    width: 27.8125rem;
    height: 14.125rem;
    color: #CE838E;
    text-align: center;
    font-family: "Passion One";
    font-size: 2.75rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
`

const Byline = styled.div`
    width: 15.0625rem;
    height: 2.125rem;
    color: #547966;
    text-align: center;
    font-family: "Passion One";
    font-size: 2rem;

`

const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 2rem;
    margin-right: 1rem;
`

const LineRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const CircleIcon = styled.div`
    width: 1.375rem;
    height: 1.375rem;
    background: url(${Circle}) no-repeat center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CheckIcon = styled.img`
    width: 1.6875rem;
    height: 2.09413rem;
    position: absolute;
    bottom: .1rem;
    display: ${({ checked }) => (checked ? "block" : "none")}; /* Show only when checked */
`;

const Line = styled.div`
    width: 23.6875rem;
    height: 1rem;
    background: #FBE5B6;
`;

const ArticleContainer = styled.div`
    width: 24.6875rem;
    height: 34.5rem;
    color: #000;
    font-family: Baskerville;
    font-size: 1rem;
    text-align: left;
    overflow-y: auto;

`

const Slide3 = ({ props }) => {

    return (
        <Background>
            <ImageContainer>
                <StrokeImage src={Stroke} />
                <PencilImage src={Pencil} />
            </ImageContainer>
            <NotebookContainer>
                <Container1>
                    <Page1 />
                    <Page2 />
                    <Page3>
                        <Title href={props.article_url} target="_blank">
                            {props.article_title}
                        </Title>
                        <Byline>
                            {props.article_byline}
                        </Byline>
                        <LineContainer>
                            {[...Array(7)].map((_, index) => (
                                <LineRow key={index}>
                                    <CircleIcon>
                                        <CheckIcon src={Check} checked={[1, 3, 4].includes(index)} />
                                    </CircleIcon>
                                    <Line />
                                </LineRow>
                            ))}
                        </LineContainer>
                    </Page3>
                </Container1>
                <BindingContainer />
                <Container2>
                    <Page4 />
                    <Page5 />
                    <Page6>
                        <ArticleContainer>
                        {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
                        </ArticleContainer>
                    </Page6>
                </Container2>
            </NotebookContainer>
        </Background>
    )
}

export default Slide3;