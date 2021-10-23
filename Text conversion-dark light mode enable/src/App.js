import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
//import Grid from './components/Grid'
import TextForm from './components/TextForm'
import ConversionText from './components/ConversionText'
import Cardevent from './components/Cardevent';
import Accoding from './components/Accoding';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Follow from './components/Follow';
//import Select from 'react-select'
// line number 8(div start se end) se lkar 25 tak jo likha hai use jsx kehte  hai
//Babel compiles JSX down to React.createElement() calls.



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  //setTimeout(() => {
  //  showAlert();
  //}, 3000);
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#181a38";
      //{color: props.mode === 'light' ? 'black' : 'white' }
      showAlert("Dark Mode has been enabled!!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been  enabled!!", "success");
    }
  }
  return (
    
    <Router>
      <Navbar title="Hacktoberfest" Dropdown="Events" Name='Spurti'  mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <br/>
            <Accoding />
          </Route>
          <Route exact path="/Event">
            <Cardevent mode={mode} />
          </Route>
          <Route exact path="/">
            <ConversionText showAlert={showAlert} convertHeading='Enter ur text for conversion' mode={mode} />
            <TextForm showAlert={showAlert} ContactTitle="Reach us" mode={mode} />
            <Follow/>
          </Route>
        </Switch>

        {/* <Grid/>*/}
        {/* <Upcoming/>*/}
      </div>
      </Router>

  );
}

export default App;

// html - react
/*
classNameName - classNameNameName
<>iske andar sab likhna</>
for loop alg hota hai
*/