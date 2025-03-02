import React from "react";
import styled from "styled-components";
import MapImage from "../images/map.png";

// Outer wrapper — locks slide to proper size
const SlideWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    position: relative;
`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: #393766;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
`;

// Adding the border BACK to match design
const LeftTextContainer = styled.div`
    width: 26%;
    height: 85%;
    color: #FBE6B6;
    font-family: "Baskervville", serif;
    font-size: 14px;
    line-height: 1.5;
    overflow-y: auto;
    padding: 1rem;
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid #FBE6B6;  // This is the border we had lost

    position: relative;
    left: 20px;   // Slight nudge to the right
    top: 60px;   // Slight nudge down

    p {
        margin-bottom: 1rem;
    }
`;

const RightContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: calc(60vw - (750px / 2));  // Centered around 60%, and slightly larger
    width: 750px;
    height: auto;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Map = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.div`
    position: absolute;
    top: 39%;
    width: 100%;
    text-align: center;
    color: #FBE6B6;
    font-family: "Passion One", sans-serif;
    font-size: 3.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const PhotoBoxContainer = styled.div`
    display: flex;
    gap: 13px;
    margin-top: 1.5rem;
    transform: translateX(-5%);
`;

const PhotoBox = styled.div`
    width: 250px;
    height: 250px;
    background-color: #FBE6B6;
`;

const Credit = styled.div`
    font-family: "Baskervville", serif;
    font-size: 14px;
    color: #FBE6B6;
    margin-top: 0.5rem;
    text-align: right;
    width: 100%;
`;

const Slide6 = () => {
    return (
        <SlideWrapper>
            <Background>
                <LeftTextContainer>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.</p>
                    <p>Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.</p>
                    <p>Leo congue hendrerit egestas nisi ex ipsum per tempor. Curae consequat diam accumsan aliquam suscipit lacus consectetur. Feugiat duis tempus pharetra suspendisse hendrerit senectus. Curabitur natoque tincidunt cubilia placerat est felis. Ligula nibh convallis elementum morbi est auctor orci scelerisque etiam. Est velit netus adipiscing aliquam nullam diam nisi.</p>
                    <p>Feugiat mus parturient venenatis amet bibendum porttitor cursus aliquam. Quisque hac justo curae lectus conubia ante cubilia natoque. Ac primis conubia magnis accumsan sociosqu in fames. Orci accumsan eget montes sociosqu facilisis a. Diam dis leo suspendisse congue himenaeos inceptos curabitur. Magna vulputate justo ornare, blandit mus id ante.</p>
                    <p>Litora ac sociosqu eleifend molestie nostra, nam porttitor viverra. Ac felis hac urna hac tincidunt. Semper mus curae luctus eu accumsan tempus. Rutrum litora metus vivamus feugiat conubia vestibulum sit vehicula himenaeos. Sapien consectetur elementum dolor ut; justo natoque habitant senectus? Gravida fusce accumsan porttitor fusce sociosqu nostra. Suscipit turpis magnis aliquam cras mattis laoreet maecenas erat eu.</p>
                </LeftTextContainer>

                <RightContentContainer>
                    <Title>
                        TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO HERE
                    </Title>
                    <Map src={MapImage} alt="World Map" />
                    <PhotoBoxContainer>
                        <PhotoBox />
                        <PhotoBox />
                        <PhotoBox />
                    </PhotoBoxContainer>
                    <Credit>(Yeejee Kim/Daily Bruin staff)</Credit>
                </RightContentContainer>
            </Background>
        </SlideWrapper>
    );
};

export default Slide6;
