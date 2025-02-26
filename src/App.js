import React, { useState, useEffect, useRef } from "react";
import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven } from "./components/Slides";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNavButtons from "./components/PageNavButtons";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const data = ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6", "slide7", "slide8", "slide9", "slide10", "slide11"];

  const slideColors = [
    { bgColor: 'red', textColor: 'white' },
    { bgColor: 'green', textColor: 'white' },
    { bgColor: 'blue', textColor: 'white' },
    { bgColor: 'yellow', textColor: 'black' },
    { bgColor: 'green', textColor: 'white' },
    { bgColor: 'purple', textColor: 'white' },
    { bgColor: 'yellow', textColor: 'black' },
    { bgColor: 'blue', textColor: 'white' },
    { bgColor: 'red', textColor: 'white' },
    { bgColor: 'green', textColor: 'white' },
    { bgColor: 'purple', textColor: 'white' },
  ];

  const slides = [ SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven ];

  // NOTE: hard coded the data since <a> approach did not work with scrolling + nav bar color handling

  // useEffect(() => {
  //   fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
  //   .then(res => res.json())
  //   .then(res => setData(res.data['article.aml']))
  // }, [])


  // 2 FUNCTIONS FOR SCROLLING EFFECT (USING WIDTH AND INDEX CONTROL)
  const handleScroll = () => {
    if (slideRef.current) {
      const scrollPosition = slideRef.current.scrollLeft;
      const slideWidth = slideRef.current.offsetWidth; 
      const slideIndex = Math.floor(scrollPosition / slideWidth);
      setCurrentSlide(slideIndex + 1); 
    }
  };
  const handleTabClick = (index) => {
    const slideWidth = slideRef.current.offsetWidth;
    // USE THE WIDTH OF THE SCROLL AND INDEX TO GET THE POSITION OF THE SLIDES
    const slidePosition = index * slideWidth; 
    slideRef.current.scrollTo({ left: slidePosition, behavior: "smooth"});
    setCurrentSlide(index + 1); 
  };

  const { textColor, bgColor } = slideColors[currentSlide - 1];

  return (
    (data &&
      //      <>
      //      {/* { } */}
      //      <div>
            
      //       {/* {!isMobile && <NewLanding title={data.title} byline={data.byline} credits={data.image_credit}/>} */}
      //       {/* <LandingPage/>  */}
    <div>
      <Header/>
      <Nav 
        data={data}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleTabClick={handleTabClick}
        textColor={textColor}
        bgColor={bgColor}
      />
      <div
        ref={slideRef}
        style={{ display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory', width: '100%', height: '100vh', scrollBehavior: 'smooth'}}
        onScroll={handleScroll}
      >
        {slides.map((SlideComponent, index) => (
          <div key={index} id={data[index]} style={{ width: '100vw', height: '100vh', flexShrink: 0, backgroundColor: bgColor, color: textColor, scrollSnapAlign: 'start' }}>
            {React.createElement(SlideComponent)}
          </div>
        ))}
      </div>
      <PageNavButtons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slideRef={slideRef}/>
    <Footer/>
    </div>)
  );
}

export default App;