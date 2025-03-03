import styled from "styled-components";
// import Nav from "./Nav";
// import PageNavButtons from "./PageNavButtons";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const Home = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'black', color: 'white'}}>
        Home
      </Container>
    </>
  );
};

const SlideOne = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'red', color: 'white'}}>
        Slide 1 Content
      </Container>
    </>
  );
};

// const SlideOneColors = {
//   bgColor: 'red',
//   textColor: 'white'
// }

const SlideTwo = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'green', color: 'white'}}>
        Slide 2 Content
      </Container>
    </>
  );
};

// const SlideTwoColors = {
//   bgColor: 'green',
//   textColor: 'white'
// }

const SlideThree = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'blue' , color: 'white'}}>
        Slide 3 Content
      </Container>
    </>
  );
};

// const SlideThreeColors = {
//   bgColor: 'blue',
//   textColor: 'white'
// }

const SlideFour = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'yellow' , color: 'black'}}>
        Slide 4 Content
      </Container>
    </>
  );
};

// const SlideFourColors = {
//   bgColor: 'yellow',
//   textColor: 'black'
// }

const SlideFive = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'green' , color: 'white'}}>
        Slide 5 Content
      </Container>
    </>
  );
};

// const SlideFiveColors = {
//   bgColor: 'green',
//   textColor: 'white'
// }

const SlideSix = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'purple', color: 'white'}}>
        Slide 6 Content
      </Container>
    </>
  );
};

// const SlideSixColors = {
//   bgColor: 'purple',
//   textColor: 'white'
// }

const SlideSeven = () => {
  return (
    <>
      {/* <NavBar bgColor="yellow" textColor="black" /> */}
      <Container style={{ backgroundColor: 'yellow' , color: 'black'}}>
        Slide 7 Content
      </Container>
    </>
  );
};

// const SlideSevenColors = {
//   bgColor: 'yellow',
//   textColor: 'black'
// }

const SlideEight = () => {
  return (
    <>
      {/* <NavBar bgColor="blue" textColor="white" /> */}
      <Container style={{ backgroundColor: 'blue' , color: 'white'}}>
        Slide 8 Content
      </Container>
    </>
  );
};

// const SlideEightColors = {
//   bgColor: 'blue',
//   textColor: 'white'
// }

const SlideNine = () => {
  return (
    <>
      {/* <NavBar bgColor="red" textColor="white" /> */}
      <Container style={{ backgroundColor: 'red' , color: 'white'}}>
        Slide 9 Content
      </Container>
    </>
  );
};

// const SlideNineColors = {
//   bgColor: 'red',
//   textColor: 'white'
// }

const SlideTen = () => {
  return (
    <>
      {/* <NavBar bgColor="green" textColor="white" /> */}
      <Container style={{ backgroundColor: 'green' , color: 'white'}}>
        Slide 10 Content
      </Container>
    </>
  );
};

// const SlideTenColors = {
//   bgColor: 'green',
//   textColor: 'white'
// }

const SlideEleven = () => {
  return (
    <>
      {/* <NavBar bgColor="purple" textColor="white" /> */}
      <Container style={{ backgroundColor: 'purple' , color: 'white'}}>
        Slide 11 Content
      </Container>
    </>
  );
};

// const SlideElevenColors = {
//   bgColor: 'purple',
//   textColor: 'white'
// }


// export { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven, SlideOneColors, SlideTwoColors, SlideThreeColors, SlideFourColors, SlideFiveColors, SlideSixColors, SlideSevenColors, SlideEightColors, SlideNineColors, SlideTenColors, SlideElevenColors };
export { Home, SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven};