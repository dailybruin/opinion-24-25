import React, { useState, useEffect, useRef } from "react";
import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven } from "./components/Slides";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNavButtons from "./components/PageNavButtons";
import Slide1 from "./components/Slide1Desktop.js";
import Slide1Mobile from "./components/Slide1Mobile.js";
import Slide2 from "./components/Slide2Desktop.js";
import Slide2Mobile from "./components/Slide2Mobile.js";
import Slide3 from "./components/Slide3.js";
import Slide3_Mobile from "./components/Slide3_Mobile.js";
import Slide9 from "./components/Slide9.js";
import Slide10 from "./components/Slide10.js";
import Slide11 from "./components/Slide11.js";

function App() {
  const [data, setData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const slideRef = useRef(null);
  const names = ["Q&A", "CONFIDENCE", "JOURNAL", "SUPEREGO", "E-IDENTITY", "EXPEDITION", "HOBBY", "DEPRECATION", "PREJUDICE", "CAREER", "BODY"];

  const slideColors = [
    { bgColor: 'red', textColor: 'white' },
    { bgColor: 'green', textColor: 'white' },
    { bgColor: '#FBE5B6', textColor: '#547966' },
    { bgColor: 'yellow', textColor: 'black' },
    { bgColor: 'green', textColor: 'white' },
    { bgColor: 'purple', textColor: 'white' },
    { bgColor: 'yellow', textColor: 'black' },
    { bgColor: 'blue', textColor: 'white' },
    { bgColor: '#383765', textColor: '#B4CCFB' },
    { bgColor: '#383765', textColor: '#FBE6B7' },
    { bgColor: '#FFFFFF', textColor: '#547966' },
  ];

  const slides = [SlideOne, SlideTwo, Slide3, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, Slide9, Slide10, Slide11];

  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml']));

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    const slidePosition = index * slideWidth;
    slideRef.current.scrollTo({ left: slidePosition, behavior: "smooth" });
    setCurrentSlide(index + 1);
  };

  const { textColor, bgColor } = slideColors[currentSlide - 1];

  return (
    data && (
      <div>
        <Header />
        {screenWidth < 780 ? (
          <Slide3_Mobile />
        ) : (
          <>
            <Nav
              data={names}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              handleTabClick={handleTabClick}
              textColor={textColor}
              bgColor={bgColor}
            />
            <div
              ref={slideRef}
              style={{
                display: 'flex',
                overflowX: 'scroll',
                scrollSnapType: 'x mandatory',
                width: '100%',
                height: '100vh',
                scrollBehavior: 'smooth',
              }}
              onScroll={handleScroll}
            >
              {slides.map((SlideComponent, index) => (
                <div
                  key={index}
                  id={data[index]}
                  style={{
                    width: '100vw',
                    height: '100vh',
                    flexShrink: 0,
                    backgroundColor: bgColor,
                    color: textColor,
                    scrollSnapAlign: 'start',
                  }}
                >
                  {React.createElement(SlideComponent)}
                </div>
              ))}
            </div>
            <PageNavButtons
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideRef={slideRef}
            />
          </>
        )}
        <Footer />
      </div>
    )
  );
}

export default App;
