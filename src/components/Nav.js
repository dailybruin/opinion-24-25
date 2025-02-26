// import { configure } from "@testing-library/dom";
import React from "react";
import styled from "styled-components";
import { colors, mediaQueries } from "../shared/config";
// const { menuText } = colors;
const { mobile } = mediaQueries;

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1000;
  background-color: ${props => props.bgColor};

  ${mediaQueries.tablet} {
    flex-direction: column;
  }
  ${mobile} {
    flex-direction: column;
  }
`

const Section = styled("a")`
  width: 100%;
  padding: 1em 0;
  color: ${({ isCurrentSlide, textColor, bgColor }) => isCurrentSlide ? textColor : bgColor};
  background-color: ${({ isCurrentSlide, textColor, bgColor }) => isCurrentSlide ? bgColor : textColor}; 
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth color transition */

  &:hover {
    text-decoration: underline overline white;
  }

  ${mobile} {
    font-size: 20px;
  }
`;

export default function Nav({ data, currentSlide, handleTabClick, textColor, bgColor }) {
  return (
    <Container bgColor={bgColor}>
      {data.map((block, index) => {
        const isCurrentSlide = (currentSlide === index + 1);

        return (
          <Section
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(index); 
            }}
            isCurrentSlide={isCurrentSlide}
            textColor={textColor}
            bgColor={bgColor}
          >
            {block}
          </Section>
        );
      })}
    </Container>
  );
}



// PREV IMPLEMENTATION
// export default function Nav({ data, currentSlide, setCurrentSlide, textColor, bgColor }) {
//   let temp = [];
//   if (Array.isArray(data)) { 
//     data.forEach((element,index)=> {
//         temp.push(element);
//     });
//   }

//   const handleTabClick = (index) => {
//     setCurrentSlide(index + 1); // Set the currentSlide to the clicked tab index
//   };

//   return (
//     <Container>
//       {temp.map((block, index) => {
//           const isCurrentSlide = currentSlide === index + 1;
//           const sectionBgColor = isCurrentSlide ? bgColor : textColor;
//           const sectionTextColor = isCurrentSlide ? textColor : bgColor; 
//           console.log(textColor);
//           console.log(bgColor);

//           return (
//             <Section 
//               key={index} 
//               href={"#"} 
//               onClick={(e) => {
//                 e.preventDefault(); // Prevent default anchor behavior
//                 handleTabClick(index); // Update the currentSlide when a tab is clicked
//               }}
//               isCurrentSlide={isCurrentSlide} 
//               bgColor={sectionBgColor} 
//               textColor={sectionTextColor}
//             >
//               {block}
//             </Section>
//           );
//       })}
//     </Container>
//   );
// }