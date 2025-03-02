import React from "react";
import styled from "styled-components";
import BinderClips from "../images/BinderClips.png";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${BinderClips});
    background-color: #547865;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

`
const Title = styled.div`
    width: 100%;
    height: fit-content;
    font-family: Passion One;
    font-weight: 400;
    font-size: 5vw;
    line-height: 66.06px;
    letter-spacing: 0%;
    text-align: right;
    color: #FFFFFF;
    padding: .25em;
    text-align: center;
`
const Slide7 = ({props}) => {
    return (
        <Container>
            <Title>{props.article_title}</Title>
        </Container>
    )
}

export default Slide7;