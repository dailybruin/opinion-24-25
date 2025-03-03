import React, { useState, useEffect, useRef } from "react";
import { Home, SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven } from "./components/Slides";
import Nav from "./components/Nav";
import PageNavButtons from "./components/PageNavButtons";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const data = ["home", "slide1", "slide2", "slide3", "slide4", "slide5", "slide6", "slide7", "slide8", "slide9", "slide10", "slide11"];

  const slideColors = [
    { bgColor: 'black', textColor: 'white' },
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

  const slides = [ Home, SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven ];

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
      <PageNavButtons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slideRef={slideRef} />
    </div>)
  );
}

export default App;


// PREVIOUS IMPLEMENTATION (DOES NOT WORK)
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Nav from "./components/Nav";
// import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven, SlideOneColors, SlideTwoColors, SlideThreeColors, SlideFourColors, SlideFiveColors, SlideSixColors, SlideSevenColors, SlideEightColors, SlideNineColors, SlideTenColors, SlideElevenColors } from "./components/Slides";
// import PageNavButtons from "./components/PageNavButtons";

// const Container = styled("div")`
//   display: flex;
//   flex-direction: column;
//   scroll-behavior: smooth;
// `;

// let slidesArray = ["slide1","slide2", "slide3", "slide4", "slide5", "slide6", "slide7", "slide8", "slide9", "slide10", "slide11"]

// function App() {
//   const [ data, setData ] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [currentColors, setCurrentColors] = useState('');
  
//   useEffect(() => {
// 		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
// 		.then(res => res.json())
// 		.then(res => setData(res.data['article.aml']))
//   }, [])

//   const handleSlideChange = (slideNumber) => {
//     console.log('Changing to slide:', slideNumber);
//     setCurrentSlide(slideNumber);
  
//     const slideColors = {
//       1: SlideOneColors,
//       2: SlideTwoColors,
//       3: SlideThreeColors,
//       4: SlideFourColors,
//       5: SlideFiveColors,
//       6: SlideSixColors,
//       7: SlideSevenColors,
//       8: SlideEightColors,
//       9: SlideNineColors,
//       10: SlideTenColors,
//       11: SlideElevenColors
//     };

//     const defaultColors = {
//       bgColor: 'black',
//       textColor: 'white'
//     }
  
//     setCurrentColors(slideColors[slideNumber] || defaultColors);
//   };


//   return (
//     (data &&
//      <>
//      {/* { } */}
//      <div>
      
//       {/* {!isMobile && <NewLanding title={data.title} byline={data.byline} credits={data.image_credit}/>} */}
//       {/* <LandingPage/>  */}
//       <Nav
//         data={slidesArray}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//         textColor={currentColors.textColor}
//         bgColor={currentColors.bgColor}
//         style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
//       />

//       <a name={slidesArray[0]} onClick={(e) => {
//           // e.preventDefault(); 
//           console.log("Anchor clicked for slide 2");
//           handleSlideChange(1);
//         }}>
//         <SlideOne/>
//       </a>
      
//       <a name={slidesArray[1]} onClick={(e) => {
//           // e.preventDefault(); 
//           console.log("Anchor clicked for slide 2");
//           handleSlideChange(2);
//         }}>
//         <SlideTwo/>
//       </a>

//       <a name={slidesArray[2]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(3);
//         }}>
//         <SlideThree/>
//       </a>

//       <a name={slidesArray[3]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(4);
//         }}>
//         <SlideFour/>
//       </a>

//       <a name={slidesArray[4]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(5);
//         }}>
//         <SlideFive/>
//       </a>

//       <a name={slidesArray[5]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(6);
//         }}>
//         <SlideSix/>
//       </a>

//       <a name={slidesArray[6]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(7);
//         }}>
//         <SlideSeven/>
//       </a>

//       <a name={slidesArray[7]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(8);
//         }}>
//         <SlideEight/>
//       </a>

//       <a name={slidesArray[8]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(9);
//         }}>
//         <SlideNine/>
//       </a>

//       <a name={slidesArray[9]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(10);
//         }}>
//         <SlideTen/>
//       </a>

//       <a name={slidesArray[10]} onClick={(e) => {
//           e.preventDefault(); 
//           handleSlideChange(11);
//         }}>
//         <SlideEleven/>
//       </a>
//       </div> 
//       <PageNavButtons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
//      </>)
//   );
// }

// export default App;