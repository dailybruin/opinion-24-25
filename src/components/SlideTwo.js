import React, { useState, useEffect } from "react";
import styled from "styled-components";
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import NavBar from "./Nav";

function SlideTwo() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Slide 2
      <Footer/>
      <NavBar/>
    </div>
  );
}

export default SlideTwo;
