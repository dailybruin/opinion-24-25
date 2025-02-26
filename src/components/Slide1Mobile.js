import React from "react";
import styled from "styled-components";

import PenIcon from "../images/penicon.svg";
import CheckIcon from "../images/checkbox.svg";
import ClipboardSVG from "../images/clipboard.svg";
import WhiteBoxSVG from "../images/whiteboxmobile.svg";
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

/* White box for headline */
const HeadlineContainer = styled.img`
  position: absolute;
  width: 90%; /* Make it wide */
  height: 11rem;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Checkmark icon */
const CheckMark = styled.img`
  position: absolute;
  width: 2.5rem;
  left: 9%;
  top: 1%;
  z-index: 2;
`;

/* Headline text (Ensures text stays inside the white box) */
const HeadlineText = styled.div`
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%; /* Ensures it stays within the white box */
  height: 5rem; /* Limit height */
  font-family: "Passion One", sans-serif;
  font-size: 1.5rem;
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  white-space: normal;
  word-wrap: break-word;
  z-index: 2;
`;

/* White credit box */
const CreditBox = styled.img`
  position: absolute;
  width: 68%;
  height: 9rem;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Credit text */
const CreditText = styled.div`
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 1.4rem;
  color: #222;
  text-align: center;
  z-index: 2;
`;

/* Clipboard absolute positioning */
const ClipboardImage = styled.img`
  position: absolute;
  width: 74%;
  top: 36%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Scrollable clipboard text */
const ClipboardTextContainer = styled.div`
  position: absolute;
  width: 54%;
  top: 51%;
  left: 50%;
  transform: translateX(-50%);
  height: 18rem; /* Restrict height */
  background: rgba(255, 255, 255, 0.8); /* Optional background for readability */
  padding: 0.8rem;
  border-radius: 0.5rem;
  overflow-y: auto; /* Enables scrolling */
  font-family: "Baskervville", serif;
  font-size: 0.9rem;
  color: #333;
  line-height: 1.5;
  z-index: 2;
`;

/* Pen absolute positioning */
const Pen = styled.img`
  position: absolute;
  width: 65%;
  top: 24%;
  left: 55%;
  transform: rotate(-5deg);
  z-index: 2;
`;

const Slide1Mobile = ({ article }) => {
  return (
    <Background>
      {/* Headline Box */}
      <HeadlineContainer src={WhiteBoxSVG} alt="White Box" />
      <CheckMark src={CheckIcon} alt="Check" />
      <HeadlineText>{article.article_title}</HeadlineText>

      {/* Credit Box */}
      <CreditBox src={WhiteCreditSVG} alt="Credit Box" />
      <CreditText>{article.article_byline}</CreditText>

      {/* Clipboard Image */}
      <ClipboardImage src={ClipboardSVG} alt="Clipboard" />

      {/* Scrollable Clipboard Text */}
      <ClipboardTextContainer>{article.article_text}</ClipboardTextContainer>

      {/* Pen */}
      <Pen src={PenIcon} alt="Pen" />
    </Background>
  );
};

export default Slide1Mobile;
