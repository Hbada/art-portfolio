import React, { Component } from 'react';
import Gallery from './Gallery';
import Gallerywide from './Gallerywide';
import './App.css';

function App() {
  // built with npx create-react-app
  // using Colt Steele React course techniques
  // for GitHub Pages deployment
  // create-react-app generates as a function while Colt taught class-based App
  // either way is okay

  return (
    <div className="App">
      <h1>Heidi Bada | Cartoon artist</h1>
      <h2>Victoria, B.C.</h2>
      <Gallery />
      <Gallerywide />
    </div>
  );
}

export default App;
