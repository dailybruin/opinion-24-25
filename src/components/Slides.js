import styled from "styled-components";
import NavBar from "./Nav";
// import PageNavButtons from "./PageNavButtons";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const SlideOne = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'red' }}>
      Slide 1 Content
      {/* <PageNavButtons currentSlide={"1"}/> */}
    </Container>
    </>
  );
};
const SlideTwo = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'green' }}>
      Slide 2 Content
      {/* <PageNavButtons currentSlide={"2"}/> */}
    </Container>
    </>
  );
};

const SlideThree = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'blue' }}>
      Slide 3 Content
      {/* <PageNavButtons currentSlide={"3"}/> */}
    </Container>
    </>
  );
};
const SlideFour = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'yellow' }}>
      Slide 4 Content
      {/* <PageNavButtons currentSlide={"4"}/> */}
    </Container>
    </>
  );
};
const SlideFive = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'green' }}>
      Slide 5 Content
      {/* <PageNavButtons currentSlide={"5"}/> */}
    </Container>
    </>
  );
};
const SlideSix = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'purple' }}>
      Slide 6 Content
      {/* <PageNavButtons currentSlide={"6"}/> */}
    </Container>
    </>
  );
};
const SlideSeven = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'yellow' }}>
      Slide 7 Content
      {/* <PageNavButtons currentSlide={"7"}/> */}
    </Container>
    </>
  );
};
const SlideEight = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'blue' }}>
      Slide 8 Content
      {/* <PageNavButtons currentSlide={"8"}/> */}
    </Container>
    </>
  );
};
const SlideNine = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'red' }}>
      Slide 9 Content
      {/* <PageNavButtons currentSlide={"9"}/> */}
    </Container>
    </>
  );
};
const SlideTen = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'green' }}>
      Slide 10 Content
      {/* <PageNavButtons currentSlide={"10"}/> */}
    </Container>
    </>
  );
};
const SlideEleven = () => {
  return (
    <>
    <NavBar/>
    <Container style={{ backgroundColor: 'purple' }}>
      Slide 11 Content
      {/* <PageNavButtons currentSlide={"11"}/> */}
    </Container>
    </>
  );
};


export { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven };