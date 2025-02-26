import React from "react";
import styled from "styled-components";
import SalaryIcon from "../images/SalaryIcon.svg"
import RequirementIcon from "../images/RequirementIcon.svg"
import FullTimeIcon from "../images/FullTimeIcon.svg"
import BylineIcon from "../images/BylineIcon10.svg"
import Slide10Image from "../images/Slide10Image.png"

const Background = styled.div`
    height: auto;
    width: 100%;
    background: #CE838E;
    flex-direction: column;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 21.0625rem;
    height: 70rem;
    border-radius: 2.3125rem;
    background: #FBE6B7;
    box-shadow: rgba(56, 55, 101, 0.70) .5rem .5rem;
    box-sizing: border-box;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 2rem auto;
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
    flex-direction: row;
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
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;


const TagContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    width: 37.625rem;
    height: 3.5839rem;
    box-sizing: border-box;
    gap: 1rem;
    margin-bottom: 1rem;
`

const TagColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

const Byline = styled.div`
    width: auto;
    height: 1.125rem;
    display: flex;
    color: #383765;
    font-family: "Passion One";
    font-size: 1.25rem;
    width: auto;
    align-items: center;
    gap: .75rem;

    img {
        width: 1.3125rem;
        height: 2.1875rem;
    }
`

const Tag = styled.div`
    color: #CE838E;
    font-family: "Passion One";
    font-size: .875rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    width: auto;
`

const ImageContainer = styled.div`
    width: 19.3125rem;
    height: 12.8125rem;
    aspect-ratio: 309/205;
    background-image: url(${(props) => props.image});
    background-size: cover;
    box-shadow: rgba(56, 55, 101, 0.70) .25rem .25rem;
    margin-top: 2rem;
    box-sizing: border-box;
`

const ArticleContainer = styled.div`
    width: 19.0625rem;
    height: 30.1875rem;
    border: 4px solid rgba(56, 55, 101, 0.70);
    color: #383765;
    font-family: "Baskervville";
    font-size: 0.75rem;
    box-sizing: border-box;
    padding: 2rem;
    text-align: left;
    overflow-y: auto;
`

const Credit = styled.div`
    color: #654E71;
    font-family: Baskerville;
    font-size: .75rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
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
                    <Byline>
                        <img src={BylineIcon} />
                        {article_byline}
                    </Byline>
                </TopRow>
                <ImageContainer image={article_img} />
                <Credit>{illustration_byline}</Credit>
                <TagContainer>
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
                </TagContainer>
                    <ArticleContainer>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.

                    Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.

                    Leo congue hendrerit egestas nisi ex ipsum per tempor. Curae consequat diam accumsan aliquam suscipit lacus consectetur. Feugiat duis tempus pharetra suspendisse hendrerit senectus. Curabitur natoque tincidunt cubilia placerat est felis. Ligula nibh convallis elementum morbi est auctor orci scelerisque etiam. Est velit netus adipiscing aliquam nullam diam nisi.

                    Feugiat mus parturient venenatis amet bibendum porttitor cursus aliquam. Quisque hac justo curae lectus conubia ante cubilia natoque. Ac primis conubia magnis accumsan sociosqu in fames. Orci accumsan eget montes sociosqu facilisis a. Diam dis leo suspendisse congue himenaeos inceptos curabitur. Magna vulputate justo ornare, blandit mus id ante.

                    Litora ac sociosqu eleifend molestie nostra, nam porttitor viverra. Ac felis hac urna hac tincidunt. Semper mus curae luctus eu accumsan tempus. Rutrum litora metus vivamus feugiat conubia vestibulum sit vehicula himenaeos. Sapien consectetur elementum dolor ut; justo natoque habitant senectus? Gravida fusce accumsan porttitor fusce sociosqu nostra. Suscipit turpis magnis aliquam cras mattis laoreet maecenas erat eu.
                    </ArticleContainer>
                <ButtonContainer>
                    <Apply>Apply now</Apply>
                    <Decide>Decide later</Decide>
                </ButtonContainer>
            </Container>
        </Background>
    )
}

export default Slide10_Mobile;