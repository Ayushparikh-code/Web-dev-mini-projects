import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Methods from './components/Methods';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Methods/>
        <Footer/>
      </div>
    )
  }
}

