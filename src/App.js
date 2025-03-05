import React, { useState, useEffect, useRef } from "react";
import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven } from "./components/Slides";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterMobile from "./components/Footer_Mobile";
import Letter from "./components/Letter.js";
import PageNavButtons from "./components/PageNavButtons";
import Landing from "./components/Landing";
import Slide1 from "./components/Slide1Desktop.js";
import Slide2 from "./components/Slide2Desktop.js";
import Slide3 from "./components/Slide3.js";
import Slide4 from "./components/Slide4.js";
import Slide5 from "./components/Slide5.js";
import Slide6 from "./components/Slide6.js";
import Slide7 from "./components/Slide7.js";
import Slide8 from "./components/Slide8.js";
import Slide9 from "./components/Slide9.js";
import Slide10 from "./components/Slide10.js";
import Slide11 from "./components/Slide11.js";
import Slide1_Mobile from "./components/Slide1Mobile.js";
import Slide2_Mobile from "./components/Slide2Mobile.js";
import Slide3_Mobile from "./components/Slide3_Mobile.js";
import Slide4_Mobile from "./components/Slide4_Mobile.js";
import Slide5_Mobile from "./components/Slide5_Mobile.js";
import Slide6_Mobile from "./components/Slide6_Mobile.js";
import Slide7_Mobile from "./components/Slide7_Mobile.js";
import Slide9_Mobile from "./components/Slide9_Mobile.js";
import Slide10_Mobile from "./components/Slide10_Mobile.js";
import Slide11_Mobile from "./components/Slide11_Mobile.js";

function App() {
    const [data, setData] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const slideRef = useRef(null);

    const names = [
        "HOME", "Q&A", "CONFIDENCE", "JOURNAL", "SUPEREGO",
        "E-IDENTITY", "EXPEDITION", "HOBBY",
        "DEPRECATION", "PREJUDICE", "CAREER", "BODY"
    ];

    const slideColors = [
        { bgColor: 'black', textColor: 'white' },
        { bgColor: '#3C3562', textColor: 'white' },
        { bgColor: '#FFE5B0', textColor: '#4E3A24' },
        { bgColor: '#FBE5B6', textColor: '#547966' },
        { bgColor: '#FFFFFF', textColor: '#CE838E' },
        { bgColor: '#FBE6B6', textColor: '#CF848E' },
        { bgColor: '#383765', textColor: '#FBE6B6' },
        { bgColor: '#383765', textColor: '#FBE6B6' },
        { bgColor: '#CE838E', textColor: '#383765' },
        { bgColor: '#383765', textColor: '#B4CCFB' },
        { bgColor: '#383765', textColor: '#FBE6B7' },
        { bgColor: '#FFFFFF', textColor: '#547966' },
    ];

    const slides = [
        Letter,
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
        Slide10,
        Slide11,
    ];

    useEffect(() => {
        fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
            .then(res => res.json())
            .then(res => setData(res.data['article.aml']));

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                {screenWidth < 900 ? (
                    <>
                        <Landing credits={data.landing_credits} />
                        <Letter letter={data.letter[0]} />    
                        <FooterMobile />
                    </>
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
                            <div
                                style={{
                                    width: '100vw',
                                    height: '100vh',
                                    flexShrink: 0,
                                    backgroundColor: bgColor,
                                    color: textColor,
                                    scrollSnapAlign: 'start',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Landing credits={data.landing_credits} />
                                <Letter letter={data.letter[0]} />
                            </div>
                            {slides.slice(1).map((SlideComponent, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '100vw',
                                        height: '100vh',
                                        flexShrink: 0,
                                        backgroundColor: bgColor,
                                        color: textColor,
                                        scrollSnapAlign: 'start',
                                    }}
                                >
                                    <SlideComponent props={data.articles[index]} />
                                </div>
                            ))}
                        </div>

                        <PageNavButtons
                            currentSlide={currentSlide}
                            setCurrentSlide={setCurrentSlide}
                            slideRef={slideRef}
                        />
                        <Footer />
                    </>
                )}
            </div>
        )
    );
}

export default App;