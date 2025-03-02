import React from "react";
import styled from "styled-components";
import PhoneImage from "../images/Group55.png";
import BubbleImage from "../images/Group56.png";

const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #FBE5B6;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
`;

// Bubbles container sits to the left of phone, anchored at roughly 60vw
const BubbleContainer = styled.div`
  width: 679px;
  height: 486px;
  background-image: url(${BubbleImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: calc(75vw - 446px - 679px - 20px); /* phone at 75vw - phone width - bubbles width - buffer space */
  top: 50%;
  transform: translateY(-50%);
`;

// Text inside the bubbles
const BubbleText = styled.div`
  position: absolute;
  top: 12%;
  left: 10%;
  font-family: "Passion One", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

const NameText = styled.div`
  position: absolute;
  top: 62%;
  left: 70%; /* Anchored over second bubble */
  transform: translateX(-50%);
  font-family: "Passion One", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

// Phone container sits exactly at 75vw
const PhoneContainer = styled.div`
  width: 446px;
  height: 819px;
  background-image: url(${PhoneImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: calc(75vw - 223px); /* Center the phone horizontally at 75vw */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

// Text inside the phone screen
const ScrollableText = styled.div`
  width: 80%;
  height: 72%;
  margin-top: 90px;
  overflow-y: auto;
  padding: 1rem;
  font-family: "Baskervville", serif;
  font-size: 14px;
  line-height: 1.5;
  color: #383765;
  background-color: transparent;
`;

const Slide5 = () => (
  <Background>
    <ContentWrapper>
      <BubbleContainer>
        <BubbleText>
          HEADLINE CAN GO <br />
          HERE HERE IS <br />
          HEADLINE SPACE
        </BubbleText>
        <NameText>Name Name</NameText>
      </BubbleContainer>

      <PhoneContainer>
        <ScrollableText>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis. Ligula fames per id porta sed felis. Fermentum urna accumsan ligula convallis phasellus quis. Proin ipsum efficitur rutrum bibendum aptent non. Faucibus ac netus justo rutrum posuere sagittis libero ut.
          <br/><br/>
          Hendrerit etiam nisi suspendisse justo amet. In felis nibh lacus efficitur platea leo nisl ac cubilia. Torquent efficitur natoque natoque quis aenean placerat; posuere justo congue. Maecenas molestie luctus conubia; orci condimentum dapibus est. At arcu sed id lacinia ornare lorem mauris. Eros sociosqu cursus suscipit metus sodales sem phasellus neque fermentum. Volutpat sagittis ex finibus potenti dis. Accumsan amet cubilia litora nascetur pellentesque malesuada.
          <br/><br/>
          Leo congue hendrerit egestas nisi ex ipsum per tempor. Curae consequat diam accumsan aliquam suscipit lacus consectetur. Feugiat duis tempus pharetra suspendisse hendrerit senectus. Curabitur natoque tincidunt cubilia placerat est felis. Ligula nibh convallis elementum morbi est auctor orci scelerisque etiam. Est velit netus adipiscing aliquam nullam diam nisi.
          <br/><br/>
          Feugiat mus parturient venenatis amet bibendum porttitor cursus aliquam. Quisque hac justo curae lectus conubia ante cubilia natoque. Ac primis conubia magnis accumsan sociosqu in fames. Orci accumsan eget montes sociosqu facilisis a. Diam dis leo suspendisse congue himenaeos inceptos curabitur. Magna vulputate justo ornare, blandit mus id ante.
          <br/><br/>
          Litora ac sociosqu eleifend molestie nostra, nam porttitor viverra. Ac felis hac urna hac tincidunt. Semper mus curae luctus eu accumsan tempus. Rutrum litora metus vivamus feugiat conubia vestibulum sit vehicula himenaeos. Sapien consectetur elementum dolor ut; justo natoque habitant senectus? Gravida fusce accumsan porttitor fusce sociosqu nostra. Suscipit turpis magnis aliquam cras mattis laoreet maecenas erat eu.
        </ScrollableText>
      </PhoneContainer>
    </ContentWrapper>
  </Background>
);

export default Slide5;
