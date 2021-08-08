import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Dropdown from "./components/Dropdown";
import {useState} from "react";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/> 
      
      <Switch>
    <Route exact path="/">
      <Hero />
      <Content />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/contact" exact>
      <Contact />
    </Route>
    <Route path="/menu" exact>
      <Menu />
    </Route>
  </Switch>
      <Footer />
    </>
  );
}

export default App;
