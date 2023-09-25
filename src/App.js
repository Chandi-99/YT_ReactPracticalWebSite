import React from "react";
// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import CTA from "./components/cta/CTA";
// import Feature from "./components/feature/Feature";
// import NavBar from "./components/navbar/NavBar";
import './App.css';
import {Article, Brand, CTA, NavBar, Feature} from './components';
import {Header, Features, WhatGPT3, Footer, Blog, Posibility} from './containers';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
          <NavBar/>
          <Header />
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Posibility/>
          <CTA/>
          <Blog/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
