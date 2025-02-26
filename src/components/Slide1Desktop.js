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

/* White box for headline (SVG replacement) */
const HeadlineContainer = styled.img`
  position: absolute;
  width: 20rem;
  left: 10%;
  top: 28%;
  z-index: 1; /* Ensure it's above the background */
`;

/* Checkmark icon */
const CheckMark = styled.img`
  position: absolute;
  width: 4rem;
  left: 7%;
  top: 25%; /* Position slightly above the white box */
  z-index: 2; /* Ensure it appears above the white box */
`;

/* Headline text */
const HeadlineText = styled.div`
  position: absolute;
  left: 12%;
  top: 33%;
  font-family: "Passion One", sans-serif;
  font-size: 3rem;
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.1;
  width: 17rem;
  z-index: 2; /* Ensure text is above white box */
`;

/* White credit box (SVG replacement) */
const CreditBox = styled.img`
  position: absolute;
  width: 20rem;
  left: 10%;
  top: 83%; /* Move below the white box */
  z-index: 1;
`;

/* Credit text */
const CreditText = styled.div`
  position: absolute;
  left: 12%;
  top: 84%;
  font-family: "Passion One", sans-serif;
  font-size: 2rem;
  color: #222;
  z-index: 2; /* Ensure text is above credit box */
`;

/* Clipboard absolute positioning */
const ClipboardImage = styled.img`
  position: absolute;
  width: 33rem;
  left: 36%;
  top: 8%;
`;

/* Pen absolute positioning */
const Pen = styled.img`
  position: absolute;
  width: 30rem;
  left: 57%;
  top: 40%;
  transform: rotate(-5deg);
`;

/* Clipboard text */
const ClipboardText = styled.div`
  position: absolute;
  width: 25rem;
  top: 30%;
  left: 40%;
  font-family: "Baskervville", serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  z-index: 2; /* Ensure text is visible on clipboard */
`;

const Slide1Desktop = () => {
  return (
    <Background>
      {/* Top navigation bar */}
      <NavBar>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
        <NavItem>NAME</NavItem>
      </NavBar>

      {/* Clipboard Image */}
      <ClipboardImage src={ClipboardSVG} alt="Clipboard" />

      {/* Clipboard Text */}
      <ClipboardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        lacinia, augue a faucibus varius, justo arcu vestibulum nunc, sit
        amet sollicitudin mi felis et ligula. Fusce eu est vitae mi
        porttitor congue. Curabitur in semper tortor. Integer vestibulum
        molestie neque, eget consectetur enim venenatis eget. Integer
        gravida, nisi nec pellentesque venenatis, ipsum justo aliquet
        purus, vitae auctor lacus ante at lacus.
      </ClipboardText>

      {/* Pen */}
      <Pen src={PenIcon} alt="Pen" />

      {/* Headline Box */}
      <HeadlineContainer src={WhiteBoxSVG} alt="White Box" />
      <CheckMark src={CheckIcon} alt="Check" />
      <HeadlineText>
        HEADLINE CAN GO HERE HERE IS HEADLINE SPACE
      </HeadlineText>

      {/* Credit Box */}
      <CreditBox src={WhiteCreditSVG} alt="Credit Box" />
      <CreditText>Lex Wang</CreditText>
    </Background>
  );
};

export default Slide1Desktop;