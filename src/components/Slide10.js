import React from "react";
import styled from "styled-components";
import SalaryIcon from "../images/SalaryIcon.svg"
import RequirementIcon from "../images/RequirementIcon.svg"
import FullTimeIcon from "../images/FullTimeIcon.svg"
import BylineIcon from "../images/BylineIcon10.svg"
import Slide10Image from "../images/Slide10Image.png"

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background: #CE838E;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
`

const Container = styled.div`
    width: 81.5625rem;
    height: 43.5rem;
    border-radius: 2.3125rem;
    background: #FBE6B7;
    box-shadow: rgba(56, 55, 101, 0.70) 1rem 1rem;
    box-sizing: border-box;
    padding: 3rem;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
`

const Title = styled.a`
    width: 62.875rem;
    color: #383765;
    font-family: "Passion One";
    font-size: 3.125rem;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    margin-top: 1rem
`

const Apply = styled.div`
    display: flex;
    width: 9.5rem;
    padding: 0.5rem 1.375rem;
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
    width: 9.5rem;
    padding: 0.5rem 1rem;
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
    background-size: cover;
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
    font-size: 1rem;
    box-sizing: border-box;
    padding: 2rem;
    text-align: left;
    overflow-y: auto;
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


const Slide10 = ({ props }) => {

   

    return (
        <Background>
            <Container>
                <TopRow>
                    <Title>{props.article_title}</Title>
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
                        {props.article_byline}
                    </Byline>
                    <TagColumn>
                        <Tag>
                            <img src={SalaryIcon} alt="SalaryIcon" />
                            High salary
                        </Tag>
                        <Tag>
                            <img src={FullTimeIcon} alt="FullTimeIcon" />
                            Full-time
                        </Tag>
                    </TagColumn>
                    <TagColumn>
                        <Tag>
                            <img src={RequirementIcon} alt="RequirementIcon" />
                            Must choose one career only
                        </Tag>
                        <Tag>
                            <img src={RequirementIcon} alt="RequirementIcon" />
                            Must be willing to take risks
                        </Tag>
                    </TagColumn>
                </BylineTagContainer>
                    <ImageContainer image={props.article_image} />
                    <Credit>{props.illustration_byline}</Credit>
                    </LeftColumn>
                    <ArticleContainer>
                    {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
                    </ArticleContainer>
                </ContentRow>
            </Container>
        </Background>
    )
}

export default Slide10;