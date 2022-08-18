import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Footer,
  Header,
  Feature,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient-bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Feature />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
