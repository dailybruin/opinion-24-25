import React, {useState} from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg"
import {ReactComponent as LeftArrow} from "../images/LeftArrow.svg"
import {ReactComponent as RightArrow} from "../images/RightArrow.svg"
import BylineIcon from "../images/BylineIcon11.svg"
import HeartIcon from "../images/HeartIcon.svg"

const Background = styled.div`
    padding-top: 2rem;
    height: 100vh;
    width: 100%;
    background: #69937D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
`

const Container = styled.div`
    width: 81.5625rem;
    height: auto;
    border-radius: 2.4375rem;
    background: #A0BEAE;
    box-sizing: border-box;
    padding: 3rem;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;

`

const TitleContainer = styled.div`
    width: 80.625rem;
    height: 4.125rem;
    background-color: #FFF;
    border-radius: .75rem;
    font-family: "Passion One";
    display: flex;
    align-items: center;
    box-sixing: border-box;
    margin: 1rem;
    padding-left: 1rem;
    gap: 2rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
`

const Title = styled.a`
    width: 72.3125rem;
    height: 2.375rem;
    color: #547966;
    font-family: "Passion One";
    font-size: 2.1875rem;
    text-decoration: none;
    cursor: pointer;
`

const ContentContainer = styled.div`
    width: 36.5625rem;
    height: 38.875rem;
    background: #fff;
    display: flex;
    flex-direction: column;
`

const BylineContainer = styled.div`
    color: #000;
    font-family: Baskerville;
    font-size: 0.9375rem;
    height: 2.5625rem;
    width: auto;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem 2rem;
`

const CommentContainer = styled.div`
    width: 32.125rem;
    height: 2.9375rem;
    background: rgba(207, 132, 142, 0.52);
    margin: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    box-sizing: border-box;
`

const Comment = styled.div`
    width: 26.75rem;
    height: 1.875rem;
    border-radius: 0.5rem;
    border: 2px solid #CF848E;
    background: #FFF;
    color: #000;
    font-family: Baskerville;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    box-sizing: border-box;
    padding: 1rem;
`

const ArticleContainer = styled.div`
    width: 32.125rem;
    height: 28rem;
    border: 4px solid #CF848E;
    color: #000;
    font-family: Baskerville;
    font-size: 1rem;
    padding: 2rem;
    text-align: left;
    box-sizing: border-box;
    margin: 0 2rem;
    overflow-y: auto;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 37.625rem;
  height: 38.875rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9d9d9;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    fill: black; 
    transition: fill 0.3s ease;
  }

  &:hover svg {
    color: #69937D; 
  }

`

const LeftButton = styled(Button)`
  left: 1rem;
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const RightButton = styled(Button)`
  right: 1rem;
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Credit = styled.div`
    color: #69937D;
    font-family: Baskerville;
    font-size: 1rem;
    width: auto;
    height: 1.5625rem;
    background: rgba(255, 255, 255, 0.44);
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 1rem;
    display: flex;
    padding: 0 1rem;
`

const PhotoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      <LeftButton onClick={prevImage} disabled={currentIndex === 0}>
        <LeftArrow />
      </LeftButton>

      <ImageContainer image={images[currentIndex]?.image || "https://via.placeholder.com/600x400"} />

      <RightButton onClick={nextImage} disabled={currentIndex === images.length - 1}>
        <RightArrow />
      </RightButton>

      <Credit>{images[currentIndex]?.credit || "(Courtesy of NAME NAME/place)"}</Credit>
    </CarouselContainer>
  );
};


const Slide11 = ({ props }) => {

    const {
        article_img = [props.article_image_1, props.article_image_2, props.article_image_3],
        image_byline_1,
        image_byline_2,
        image_byline_3,
        illustration_byline,
    } = props || {};

    const bylineArray = Array.isArray(illustration_byline)
        ? illustration_byline
        : [image_byline_1, image_byline_2, image_byline_3];

    const images = article_img.map((img, index) => ({
          image: img,
          credit: bylineArray[index] || illustration_byline || "No credit available",
      }));

    return (
        <Background>
            <TitleContainer>
                <img src={SearchIcon} />
                <Title>{props.article_title}</Title>
            </TitleContainer>
            <Container>
             <PhotoCarousel images={images}/>
             <ContentContainer>
                <BylineContainer>
                    <img src={BylineIcon} />
                    {props.article_byline}
                </BylineContainer>
                <ArticleContainer>
                {props.article_text.split('/n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}

                </ArticleContainer>
                <CommentContainer>
                    <img src={HeartIcon} alt="HeartIcon" />
                    <Comment>
                        Leave a comment...
                    </Comment>
                </CommentContainer>
             </ContentContainer>
            </Container>
        </Background>
    )
}




export default Slide11;