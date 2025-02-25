import React from "react";
import styled from "styled-components";
import Slide9Image1 from "../images/Slide9Image1.png"
import Slide9Image2 from "../images/Slide9Image2.png"

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background: #383765;
    display: flex;
    overflow: hidden;
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
    font-size: 2.375rem;
    padding: 1rem;
    box-sizing: border-box;
    text-transform: uppercase;
`
const Byline = styled.div`
    width: 16.48163rem;
    height: 3.46494rem;
    border-radius: 0.9375rem;
    background: #B4CCFB;
    color: #383765;
    font-family: "Passion One";
    font-size: 2.5rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
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
    width: 46.302rem;
    height: 46.302rem;
    border: 43px solid #B4CCFB;
    overflow: hidden;
`

const Circle2 = styled(Circle)`
    width: 50.875rem;
    height: 50.875rem;
    border: 17px solid rgba(180, 204, 251, 0.85);
    backdrop-filter: blur(2px);
    padding: 1.5rem;
`

const Circle3 = styled(Circle)`
    width: 55.45306rem;
    height: 55.45306rem;
    border: 17px solid rgba(180, 204, 251, 0.85);
    backdrop-filter: blur(2px);
    padding: 1.5rem;
`

const ArticleContainer = styled.div`
    width: 28.77213rem;
    height: 41.62031rem;
    border-radius: 8.3125rem;
    background: #FFF;
    color: #000;
    font-family: Baskerville;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    text-align: left;
`

const ImageContainer = styled.div`
    width: 44.03106rem;
    height: 57.78638rem;
    aspect-ratio: 704.50/924.58;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    position: relative;
`

const BackgroundImage1 = styled.div`
    width: 44.03106rem;
    height: 19.85413rem;
    transform: rotate(88deg);
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;;
    position: absolute;
    left: 15rem;
    z-index: -1;
    opacity: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 192, 203, 0.1);
        pointer-events: none; 
    }
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

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 192, 203, 0.1);
        pointer-events: none; 
    }
`

const BackgroundImage3 = styled.div`
    width: 44.03106rem;
    height: 19.85413rem;
    transform: rotate(410deg);
    background-cover: contain;
    background: url(${(props) => props.image}) bottom right / 100% 291.055% no-repeat;;
    position: absolute;
    right: 70rem;
    top: 45rem;
    z-index: 2;
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

    const {
        article_title = "TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO",
        article_url,
        article_byline = "Nadine Ismail",
        article_img = Slide9Image1,
        illustration_byline = "(Helen Park/Illustrations Director)"
    } = props || {};

    return (
        <Background>
            <BackgroundImage3 image={Slide9Image2} />
            <CircleContainer>
                <Circle3>
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
                </Circle3>
            </CircleContainer>
            <TitleBylineContainer>
                <Title>
                    {article_title}
                </Title>
                <Byline>
                    {article_byline}
                </Byline>
            </TitleBylineContainer>
            <ImageContainer image={article_img} />
            <Credit>
                {illustration_byline}
            </Credit>
        </Background>
    )
}

export default Slide9;