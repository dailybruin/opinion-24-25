import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven } from "./components/Slides";
import PageNavButtons from "./components/PageNavButtons";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;

let slidesArray = ["slide1","slide2", "slide3", "slide4", "slide5", "slide6", "slide7", "slide8", "slide9", "slide10", "slide11"]

function App() {
  const [ data, setData ] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  // return data && (
  //   <div className="App">
  //     <Header/>
  //     Hello Daily Bruin!
  //     <Footer/>
  //     <NavBar/>
  //   </div>
  // );

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };


  return (
    (data &&
     <>
     {/* { } */}
     <Container>
      <Header/>
      
      {/* {!isMobile && <NewLanding title={data.title} byline={data.byline} credits={data.image_credit}/>} */}
      {/* <LandingPage/>  */}
      <Nav data={slidesArray}/>
      <a name={slidesArray[0]} onClick={() => handleSlideChange(1)}>
        <SlideOne/>
      </a>
      
      <a name={slidesArray[1]} onClick={() => handleSlideChange(2)}>
        <SlideTwo/>
      </a>

      <a name={slidesArray[2]} onClick={() => handleSlideChange(3)}>
        <SlideThree/>
      </a>

      <a name={slidesArray[3]} onClick={() => handleSlideChange(4)}>
        <SlideFour/>
      </a>

      <a name={slidesArray[4]} onClick={() => handleSlideChange(5)}>
        <SlideFive/>
      </a>

      <a name={slidesArray[5]} onClick={() => handleSlideChange(6)}>
        <SlideSix/>
      </a>

      <a name={slidesArray[6]} onClick={() => handleSlideChange(7)}>
        <SlideSeven/>
      </a>

      <a name={slidesArray[7]} onClick={() => handleSlideChange(8)}>
        <SlideEight/>
      </a>

      <a name={slidesArray[8]} onClick={() => handleSlideChange(9)}>
        <SlideNine/>
      </a>

      <a name={slidesArray[9]} onClick={() => handleSlideChange(10)}>
        <SlideTen/>
      </a>

      <a name={slidesArray[10]} onClick={() => handleSlideChange(11)}>
        <SlideEleven/>
      </a>

      
      <Footer>
        <h1>DAILY BRUIN</h1>
        <p>Built with Suzy’s ♥ in Kerckhoff 118 by {data.developer_credits}. Designed by {data.designer_credits}.</p>
      </Footer>
      </Container> 
      <PageNavButtons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
     </>)
  );
}

export default App;
