import Play from './components/Play';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/next" element={<Play/>}/>
        {/* <Route path="/score" element={<Result/>}/> */}
       </Routes>
    </BrowserRouter>
  )
}

export default App;