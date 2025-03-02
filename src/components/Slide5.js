import React from "react";
import styled from "styled-components";
import PhoneImage from "../images/Group55.png";

const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #FBE5B6;
  overflow: hidden;
`;

const PhoneContainer = styled.div`
  width: 446px;
  height: 819px;
  background-image: url(${PhoneImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: calc(25vw - (446px / 2));
`;

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
  </Background>
);

export default Slide5;
