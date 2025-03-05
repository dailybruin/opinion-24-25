import React from "react";
import styled from "styled-components";
import Circle from "../images/Circle.svg"
import Check from "../images/Check.svg"
import Binding from "../images/Binding.svg"

const Background = styled.div`
    height: auto;
    width: 100%;
    background: #CE838E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
    padding: 2rem 0;
`

const Container2 = styled.div`
    width: 21.9375rem;
    height: 26.19988rem;
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
    width: 20.76438rem;
    height: 24.79213rem;
    border-radius: 2.8125rem 0 0 2.8125rem;
    top: 1.5rem;
    left: 1rem;
`;
const Page2 = styled(Page)`
    width: 20.56888rem;
    height: 24.5575rem;
    border-radius: 2.8125rem 0 0 2.8125rem;
    top: 1.5rem;
    left: 1.2rem;
`;
const Page3 = styled(Page)`
    width: 20.37331rem;
    height: 24.28375rem;
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
    width: 20.76438rem;
    height: 24.79213rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1rem;
`;
const Page5 = styled(Page)`
    width: 20.37331rem;
    height: 24.28375rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1.2rem;
`;
const Page6 = styled(Page)`
    width: 20.37331rem;
    height: 24.28375rem;
    border-radius: 0 2.8125rem 2.8125rem 0;
    top: 1.5rem;
    right: 1.4rem;
`;

const Container1 = styled.div`
    width: 21.9375rem;
    height: 26.19988rem;
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
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 2rem;
`;

const BindingContainer = styled.div`
    width: 3.4rem; /* Adjust width to fit in the middle */
    height: 20.19988rem; /* Match the container height */
    position: absolute;
    right: -1.5rem;
    top: 4rem;
    z-index: 10;

    background-image: url(${Binding});
    background-repeat: repeat-y; /* Repeat vertically */
    background-size: 100% 4rem; /* Control spacing */
    background-position: center;
    overflow: hidden;
`;

const Title = styled.div`
    width: 17.375rem;
    height: auto;
    color: #CE838E;
    text-align: center;
    font-family: "Passion One";
    font-size: 1.875rem;
    text-transform: uppercase;
    margin-bottom: 1rem;

`

const Byline = styled.div`
    width: 9.5rem;
    height: 1.4375rem;
    color: #547966;
    text-align: center;
    font-family: "Passion One";
    font-size: 1.25rem;
    margin-bottom: 1rem;
`

const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`

const LineRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const CircleIcon = styled.div`
    width: 1rem;
    height: 1rem;
    background: url(${Circle}) no-repeat center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CheckIcon = styled.img`
    width: 1.rem;
    height: 1.3rem;
    position: absolute;
    bottom: .1rem;
    display: ${({ checked }) => (checked ? "block" : "none")}; /* Show only when checked */
`;

const Line = styled.div`
    width: 14.8205rem;
    height: 1rem;
    background: #FBE5B6;
`;

const ArticleContainer = styled.div`
    width: 15.5rem;
    height: 21.625rem;
    color: #000;
    font-family: Baskerville;
    font-size: 0.75rem;
    text-align: left;
    overflow-y: auto;

`

const Slide3 = ({ props }) => {

    const {
        article_title = "HEADLINE CAN GO HERE HERE IS HEADLINE SPACE MORE HEADLINE HERE",
        article_url,
        article_byline = "Anglina Alkhouri",
    } = props || {};

    return (
        <Background>
            <NotebookContainer>
                <Container1>
                    <Page1 />
                    <Page2 />
                    <Page3>
                        <Title>
                            {article_title}
                        </Title>
                        <Byline>
                            {article_byline}
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