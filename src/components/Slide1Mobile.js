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

/* White box for headline (SVG replacement, now WIDE) */
const HeadlineContainer = styled.img`
  position: absolute;
  width: 75%;  /* Make it wide */
  height: auto; /* Keep aspect ratio */
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Checkmark icon */
const CheckMark = styled.img`
  position: absolute;
  width: 3rem;
  left: 6%;
  top: 2%;
  z-index: 2;
`;

/* Headline text */
const HeadlineText = styled.div`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 2rem;
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 75%;
  z-index: 2;
`;

/* White credit box (SVG replacement, smaller width) */
const CreditBox = styled.img`
  position: absolute;
  width: 75%;
  height: auto;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Credit text */
const CreditText = styled.div`
  position: absolute;
  top: 32%;
  left: 25%;
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 1.6rem;
  color: #222;
  z-index: 2;
`;

/* Clipboard absolute positioning (scaled smaller for mobile) */
const ClipboardImage = styled.img`
  position: absolute;
  width: 65%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

/* Clipboard text (resized to fit inside) */
const ClipboardText = styled.div`
  position: absolute;
  width: 50%;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Baskervville", serif;
  font-size: 0.80rem;
  color: #333;
  text-align: justify;
  line-height: 1.4;
  z-index: 2;
`;

/* Pen absolute positioning (smaller & rotated) */
const Pen = styled.img`
  position: absolute;
  width: 68%;
  top: 22%;
  left: 50%;
  transform: rotate(-5deg);
  z-index: 2;
`;

const Slide1Mobile = () => {
  return (
    <Background>
      {/* Headline Box */}
      <HeadlineContainer src={WhiteBoxSVG} alt="White Box" />
      <CheckMark src={CheckIcon} alt="Check" />
      <HeadlineText>
        HEADLINE CAN GO HERE HERE IS HEADLINE SPACE MORE HEADLINE SPACE
      </HeadlineText>

      {/* Credit Box */}
      <CreditBox src={WhiteCreditSVG} alt="Credit Box" />
      <CreditText>Lex Wang</CreditText>

      {/* Clipboard Image */}
      <ClipboardImage src={ClipboardSVG} alt="Clipboard" />

      {/* Clipboard Text */}
      <ClipboardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        lacinia, augue a faucibus varius, justo arcu vestibulum nunc, sit
        amet sollicitudin mi felis et ligula. Fusce eu est vitae mi
        porttitor congue. Curabitur in semper tortor.
      </ClipboardText>

      {/* Pen */}
      <Pen src={PenIcon} alt="Pen" />
    </Background>
  );
};

export default Slide1Mobile;