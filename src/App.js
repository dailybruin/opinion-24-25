import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slide9 from "./components/Slide9";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/opinion-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <Slide9 article={data.articles[8]}/>
      <Footer/>
    </div>
  );
}

export default App;
