import React from "react";
import styled from "styled-components";
import SalaryIcon from "../images/SalaryIcon.svg"
import RequirementIcon from "../images/RequirementIcon.svg"
import FullTimeIcon from "../images/FullTimeIcon.svg"
import BylineIcon from "../images/BylineIcon.svg"
import Slide10Image from "../images/Slide10Image.png"

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background: #CE838E;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 21.0625rem;
    height: 70rem;
    border-radius: 2.3125rem;
    background: #FBE6B7;
    box-shadow: rgba(56, 55, 101, 0.70) 1rem 1rem;
    box-sizing: border-box;
    padding: 3rem;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
`

const Title = styled.div`
    width: 18.5rem;
    color: #383765;
    font-family: "Passion One";
    font-size: 1.875rem;
    text-align: left;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    margin-top: 1rem
`

const Apply = styled.div`
    display: flex;
    width: 7.625rem;
    padding: 0.25rem 0.4375rem;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: #CE838E;
    color: #FBE6B7;
    text-align: center;
    font-family: "Passion One";
    font-size: 1.5rem;
    box-sizing: border-box;
`

const Decide = styled.div`
    display: flex;
    width: 8.125rem;
    padding: 0.25rem 0.4375rem;
    justify-content: center;
    border-radius: 6.25rem;
    border: 3px solid #CE838E;
    color: #CE838E;
    text-align: center;
    font-family: "Passion One";
    font-size: 1.5rem;
    box-sizing: border-box;
`

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;


const BylineTagContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    width: 37.625rem;
    height: 3.5839rem;
    box-sizing: border-box;
`

const TagColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

const Byline = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #383765;
    font-family: "Passion One";
    font-size: 1.25rem;
    width: auto;
    margin-left: 2rem;
`

const Tag = styled.div`
    color: #CE838E;
    font-family: "Passion One";
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    width: auto;
`

const ImageContainer = styled.div`
    width: 37.625rem;
    height: 25rem;
    aspect-ratio: 301/200;
    background-image: url(${(props) => props.image});
    box-shadow: rgba(56, 55, 101, 0.70) .75rem .75rem;
    margin-top: 1rem;
    box-sizing: border-box;
`
const LeftColumn = styled.div`
    display: flex;
    flex-direction: column; /* Stack BylineTagContainer on top of ImageContainer */
    align-items: flex-start; /* Align contents to the left */
    width: 40rem; /* Adjust as needed */
`;

const ArticleContainer = styled.div`
    width: 34.6875rem;
    height: 30.1875rem;
    border: 4px solid rgba(56, 55, 101, 0.70);
    color: #383765;
    font-family: "Baskervville";
    font-size: 0.75rem;
    box-sizing: border-box;
    padding: 2rem;
    text-align: left;
`

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-start; 
    gap: 2rem;
    margin-top: 1rem;
`;

const Credit = styled.div`
    color: #654E71;
    font-family: Baskerville;
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    width: 95%;
`


const Slide10_Mobile = ({ props }) => {

    const {
        article_title = "TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO HERE TITLE OF THE STORY CAN GO",
        article_url,
        article_byline = "Amy Wong",
        article_img = Slide10Image,
        illustration_byline = "(Nia Nguyen/Daily Bruin)"
    } = props || {};

    return (
        <Background>
            <Container>
                <TopRow>
                    <Title>{article_title}</Title>
                    <ButtonContainer>
                        <Apply>Apply now</Apply>
                        <Decide>Decide later</Decide>
                    </ButtonContainer>
                </TopRow>
                <ContentRow>
                <LeftColumn>
                <BylineTagContainer>
                    <Byline>
                        <img src={BylineIcon} />
                        {article_byline}
                    </Byline>
                    <TagColumn>
                        <Tag>
                            <img src={SalaryIcon} />
                            High salary
                        </Tag>
                        <Tag>
                            <img src={FullTimeIcon} />
                            Full-time
                        </Tag>
                    </TagColumn>
                    <TagColumn>
                        <Tag>
                            <img src={RequirementIcon} />
                            Must choose one career only
                        </Tag>
                        <Tag>
                            <img src={RequirementIcon} />
                            Must be willing to take risks
                        </Tag>
                    </TagColumn>
                </BylineTagContainer>
                    <ImageContainer image={article_img} />
                    <Credit>{illustration_byline}</Credit>
                    </LeftColumn>
                    <ArticleContainer>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.

                    Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.

                    Leo congue hendrerit egestas nisi ex ipsum per tempor. Curae consequat diam accumsan aliquam suscipit lacus consectetur. Feugiat duis tempus pharetra suspendisse hendrerit senectus. Curabitur natoque tincidunt cubilia placerat est felis. Ligula nibh convallis elementum morbi est auctor orci scelerisque etiam. Est velit netus adipiscing aliquam nullam diam nisi.

                    Feugiat mus parturient venenatis amet bibendum porttitor cursus aliquam. Quisque hac justo curae lectus conubia ante cubilia natoque. Ac primis conubia magnis accumsan sociosqu in fames. Orci accumsan eget montes sociosqu facilisis a. Diam dis leo suspendisse congue himenaeos inceptos curabitur. Magna vulputate justo ornare, blandit mus id ante.

                    Litora ac sociosqu eleifend molestie nostra, nam porttitor viverra. Ac felis hac urna hac tincidunt. Semper mus curae luctus eu accumsan tempus. Rutrum litora metus vivamus feugiat conubia vestibulum sit vehicula himenaeos. Sapien consectetur elementum dolor ut; justo natoque habitant senectus? Gravida fusce accumsan porttitor fusce sociosqu nostra. Suscipit turpis magnis aliquam cras mattis laoreet maecenas erat eu.
                    </ArticleContainer>
                </ContentRow>
            </Container>
        </Background>
    )
}

export default Slide10_Mobile;