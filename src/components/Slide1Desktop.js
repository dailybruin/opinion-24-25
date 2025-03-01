import React from "react";
import styled from "styled-components";

import PenIcon from "../images/penicon.svg";
import CheckIcon from "../images/checkbox.svg";
import ClipboardSVG from "../images/clipboard.svg";
import WhiteBoxSVG from "../images/whitebox.svg";
import WhiteCreditSVG from "../images/creditbox.svg";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #3C3562;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
`;

/* Top nav bar */
const NavBar = styled.div`
  width: 100%;
  height: 3rem;
  background: #2C2852;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1rem;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

/* White box for headline */
const HeadlineContainer = styled.img`
  position: absolute;
  width: 20rem;
  left: 10%;
  top: 28%;
  z-index: 1;
`;

/* Checkmark icon */
const CheckMark = styled.img`
  position: absolute;
  width: 4rem;
  left: 7%;
  top: 25%;
  z-index: 2;
`;

/* Headline text (Ensures text stays inside the box) */
const HeadlineText = styled.div`
  position: absolute;
  left: 11%;
  top: 30%;
  width: 18rem; /* Keeps text inside the white box */
  height: 6rem; /* Set max height */
  font-family: "Passion One", sans-serif;
  font-size: 2.2rem;
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.1;
  white-space: normal;
  word-wrap: break-word; /* Ensures long words wrap */
  z-index: 2;
`;

/* White credit box */
const CreditBox = styled.img`
  position: absolute;
  width: 20rem;
  left: 10%;
  top: 80%;
  z-index: 1;
`;

/* Credit text */
const CreditText = styled.div`
  position: absolute;
  left: 12%;
  top: 82%;
  font-family: "Passion One", sans-serif;
  font-size: 2rem;
  color: #222;
  z-index: 2;
`;

/* Clipboard absolute positioning */
const ClipboardImage = styled.img`
  position: absolute;
  width: 33rem;
  left: 36%;
  top: 12%;
`;

/* Pen absolute positioning */
const Pen = styled.img`
  position: absolute;
  width: 30rem;
  left: 57%;
  top: 40%;
  transform: rotate(-5deg);
`;

/* Scrollable clipboard text */
const ClipboardTextContainer = styled.div`
  position: absolute;
  width: 24rem;
  top: 33%;
  left: 40%;
  height: 26rem; /* Restrict height */
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-y: auto; /* Enables scrolling */
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  z-index: 2;
`;

const Slide1Desktop = ({ article }) => {
  return (
    <Background>

      {/* Clipboard Image */}
      <ClipboardImage src={ClipboardSVG} alt="Clipboard" />

      {/* Scrollable Clipboard Text */}
      <ClipboardTextContainer>The Social Vulnerability Index (SVI) dataset for Los Angeles county includes information about socioeconomic and demographic factors impacting the vulnerabilities of the LA community. The dataset includes tract identifiers (Tract 2020, Tract Label, Location), geographical attributes (Area in Square Miles), and population estimates from the 2016-2020 American Community Survey (ACS). It also includes estimates for housing units and households, along with measures of uncertainty (MOE). The SVI is calculated based on four themes: Socioeconomic Status, Household Characteristics, Racial and Ethnic Minority Status, and Housing Type/Transportation. Each of these four themes has a summary score and percentile ranking, contributing to an overall vulnerab
      The Social Vulnerability Index (SVI) dataset for Los Angeles county includes information about socioeconomic and demographic factors impacting the vulnerabilities of the LA community. The dataset includes tract identifiers (Tract 2020, Tract Label, Location), geographical attributes (Area in Square Miles), and population estimates from the 2016-2020 American Community Survey (ACS). It also includes estimates for housing units and households, along with measures of uncertainty (MOE). The SVI is calculated based on four themes: Socioeconomic Status, Household Characteristics, Racial and Ethnic Minority Status, and Housing Type/Transportation. Each of these four themes has a summary score and percentile ranking, contributing to an overall vulnerab
      The Social Vulnerability Index (SVI) dataset for Los Angeles county includes information about socioeconomic and demographic factors impacting the vulnerabilities of the LA community. The dataset includes tract identifiers (Tract 2020, Tract Label, Location), geographical attributes (Area in Square Miles), and population estimates from the 2016-2020 American Community Survey (ACS). It also includes estimates for housing units and households, along with measures of uncertainty (MOE). The SVI is calculated based on four themes: Socioeconomic Status, Household Characteristics, Racial and Ethnic Minority Status, and Housing Type/Transportation. Each of these four themes has a summary score and percentile ranking, contributing to an overall vulnerab
      </ClipboardTextContainer>

      {/* Pen */}
      <Pen src={PenIcon} alt="Pen" />

      {/* Headline Box */}
      <HeadlineContainer src={WhiteBoxSVG} alt="White Box" />
      <CheckMark src={CheckIcon} alt="Check" />
      <HeadlineText>{article.article_title}</HeadlineText>

      {/* Credit Box */}
      <CreditBox src={WhiteCreditSVG} alt="Credit Box" />
      <CreditText>{article.article_byline}</CreditText>
    </Background>
  );
};

export default Slide1Desktop;