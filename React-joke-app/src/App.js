
import './App.css';

import React, { Component } from 'react' ;

import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Home/>
      </div>
    
      <footer className = "Footer">
        <Footer/>
      </footer>
     
    </div>
  );
}

export default App;
