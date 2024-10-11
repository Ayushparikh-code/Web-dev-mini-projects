import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Instructions from './components/Instructions';
import WelcomeScreen from './components/Welcome';
function App() {
 

  return (
    <>
      <Navbar />
      <WelcomeScreen />
      <Instructions />
     </>
  );
};

export default App;
