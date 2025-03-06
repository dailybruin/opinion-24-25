import React, {useState} from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg"
import {ReactComponent as LeftArrow} from "../images/LeftArrow.svg"
import {ReactComponent as RightArrow} from "../images/RightArrow.svg"
import BylineIcon from "../images/BylineIcon11.svg"
import HeartIcon from "../images/HeartIcon.svg"

const Background = styled.div`
    height: auto;
    width: 100%;
    background: #69937D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
`

const Container = styled.div`
    width: 21.4375rem;
    height: 54.75rem;
    border-radius: 1.5625rem;
    background: #A0BEAE;
    box-sizing: border-box;
    padding: 1rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`

const TitleContainer = styled.div`
    width: 21.1875rem;
    height: 13rem;
    background-color: #FFF;
    border-radius: .75rem;
    font-family: "Passion One";
    display: flex;
    align-items: center;
    box-sixing: border-box;
    margin: 1rem;
    position: relative;

    img {
        position: absolute;
        top: 1.5rem;
        left: 1rem;
    }
`

const Title = styled.div`
    width: 14.4375rem;
    height: 10.3125rem;
    color: #547966;
    font-family: "Passion One";
    font-size: 1.875rem;
    text-align: left;
    margin-left: 5rem; 
`

const ContentContainer = styled.div`
    width: 19.5625rem;
    height: 31.875rem;
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
    padding: 1rem;
`

const CommentContainer = styled.div`
    width: 17.35144rem;
    height: 1.60538rem;
    background: rgba(207, 132, 142, 0.52);
    margin: 1rem auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    box-sizing: border-box;

    img {
        width: 1.16131rem;
        height: 1.02469rem;
    }
`

const Comment = styled.div`
    width: 14.61894rem;
    height: 1.02469rem;
    border-radius: 0.5rem;
    border: 2px solid #CF848E;
    background: #FFF;
    color: #000;
    font-family: Baskerville;
    font-size: 0.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    box-sizing: border-box;
    padding: 0 .5rem;
`

const ArticleContainer = styled.div`
    width: 17.4375rem;
    height: 24.3125rem;
    border: 4px solid #CF848E;
    color: #000;
    font-family: Baskerville;
    font-size: 0.75rem;
    padding: 1rem;
    text-align: left;
    box-sizing: border-box;
    margin: 0 1rem;
    overflow-y: auto;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 19.5625rem;
  height: 20.1875rem;
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
    width: 1.5rem;
    height: 1.5rem;
    fill: black; 
    transition: fill 0.3s ease;
  }

  &:hover svg {
    color: #69937D; 
  }

`

const LeftButton = styled(Button)`
  left: .2rem;
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const RightButton = styled(Button)`
  right: .2rem;
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Credit = styled.div`
    color: #69937D;
    font-family: Baskerville;
    font-size: .75rem;
    width: auto;
    height: 1.125rem;
    background: rgba(255, 255, 255, 0.44);
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: .5rem;
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
             <PhotoCarousel images={images.length > 0 ? images : [{ image: "", credit: "(Courtesy of NAME NAME/place)" }]}/>
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
                    <img src={HeartIcon} />
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