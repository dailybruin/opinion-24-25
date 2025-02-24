import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #B4CCFB;
`

const Circle = styled.div`
    width: 46.302rem;
    height: 46.302rem;
    border-radius: 46.302rem;
    border: 43px solid #383765;
`

const ArticleContainer = styled.div`
    width: 28.77213rem;
    height: 41.62031rem;
    border-radius: 8.3125rem;
    background: #FFF;
`

const ImageContainer = styled.div`
    width: 42rem;
    height: 55.12081rem;
    aspect-ratio: 672.00/881.93;
`
const Slide9 = ({ article }) => {
    return (
        <Container>
            <Circle>
                <ArticleContainer>
                    {article}
                </ArticleContainer>
            </Circle>
            <ImageContainer />
        </Container>
    )
}

export default Slide9;