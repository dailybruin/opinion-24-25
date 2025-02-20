import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import SlideOne from './components/SlideOne';
import SlideTwo from "./components/SlideTwo";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  

`;

let slidesArray = ["slide1","slide2"]

function App() {
  const [ data, setData ] = useState(null);
  
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
  return (
    (data &&
     <>
     {/* { } */}
     <Container>
      <Header/>
      
      {/* {!isMobile && <NewLanding title={data.title} byline={data.byline} credits={data.image_credit}/>} */}
      {/* <LandingPage/>  */}
      <Nav data={slidesArray}/>
      <a name={slidesArray[0]}>
        <SlideOne/>
      </a>
      
      <a name={slidesArray[1]}>
        <SlideTwo/>
      </a>
      
      <Footer>
        <h1>DAILY BRUIN</h1>
        <p>Built with Suzy’s ♥ in Kerckhoff 118 by {data.developer_credits}. Designed by {data.designer_credits}.</p>
      </Footer>
      </Container> 
      
     </>)
  );
}

export default App;
