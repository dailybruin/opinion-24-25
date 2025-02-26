import React from "react";
import styled from "styled-components";
import Slide9Image1 from "../images/Slide9Image1.png"
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
`

const ImageContainer = styled.div`
    height: 50.08463rem;
    aspect-ratio: 610.60/801.35;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 90%;  
    left: 35%;
    transform: translateX(-50%); /* 👈 Centers it horizontally */
    margin-top: 2rem; /* Adjust spacing */

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

    const {
        article_title = "TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO",
        article_url,
        article_byline = "Nadine Ismail",
        article_img = Slide9Image1,
        illustration_byline = "(Helen Park/Illustrations Director)"
    } = props || {};

    return (
        <Background>
            <TitleBylineContainer>
                <Title>
                    {article_title}
                </Title>
                <Byline>
                    {article_byline}
                </Byline>
            </TitleBylineContainer>
            <CircleContainer>
                <Circle2>
                     <Circle1>
                        <BackgroundImage1 image={Slide9Image2} />
                        <BackgroundImage2 image={Slide9Image2} />
                        <ArticleContainer>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.

Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.

Leo congue hendrerit egestas nisi ex ipsum per tempor. Curae consequat diam accumsan aliquam suscipit lacus consectetur. Feugiat duis tempus pharetra suspendisse hendrerit senectus. Curabitur natoque tincidunt cubilia placerat est felis. Ligula nibh convallis elementum morbi est auctor orci scelerisque etiam. Est velit netus adipiscing aliquam nullam diam nisi.

Feugiat mus parturient venenatis amet bibendum porttitor cursus aliquam. Quisque hac justo curae lectus conubia ante cubilia natoque. Ac primis conubia magnis accumsan sociosqu in fames. Orci accumsan eget montes sociosqu facilisis a. Diam dis leo suspendisse congue himenaeos inceptos curabitur. Magna vulputate justo ornare, blandit mus id ante.

Litora ac sociosqu eleifend molestie nostra, nam porttitor viverra. Ac felis hac urna hac tincidunt. Semper mus curae luctus eu accumsan tempus. Rutrum litora metus vivamus feugiat conubia vestibulum sit vehicula himenaeos. Sapien consectetur elementum dolor ut; justo natoque habitant senectus? Gravida fusce accumsan porttitor fusce sociosqu nostra. Suscipit turpis magnis aliquam cras mattis laoreet maecenas erat eu.
                        </ArticleContainer>
                    </Circle1>
                </Circle2>
            </CircleContainer>
            <ImageContainer image={article_img} />
            <Credit>
                {illustration_byline}
            </Credit>
        </Background>
    )
}

export default Slide9;