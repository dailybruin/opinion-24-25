import { configure } from "@testing-library/dom";
import React from "react";
import styled from "styled-components";

import { colors, mediaQueries } from "../shared/config";
const { menuText } = colors;
const { mobile } = mediaQueries;

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${mediaQueries.tablet} {
    flex-direction: column;
  }
  ${mobile} {
    flex-direction: column;
  }

`;

const Section = styled("a")`
  width: 100%;
  padding: 1em 0;

  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;

 &:hover{
    color: white;

    text-decoration: underline overline white;
  }


  ${mobile} {
    font-size: 20px;
  }
`;

export default function Nav(data) {
  let temp = [];
  if (Array.isArray(data)) { 
    data.forEach((element,index)=> {
        temp.push(element);
    });
  }
  
  let colors = ["black"];
  return (
    <Container>
      {/* <Section href="#whitewashing" style={{ backgroundColor: "#C1DBA0" }}>
        Whitewashing
      </Section>
      <Section href="#microagressions" style={{ backgroundColor: "#AEC195" }}>
        Microagressions
      </Section>
      <Section href="#community" style={{ backgroundColor: "#9EAB8C" }}>
        UCLA Community
      </Section> */}
      {temp.map((block, index) => {
          return (
            <Section href={"#"+block} style={{ backgroundColor: colors[0] }}>
            {block}
            </Section>
          )
      })}
    </Container>
  );
}