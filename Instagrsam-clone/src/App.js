import Navbar from "../src/Components/Navbar"
import Story from "../src/Components/Story"
import SideBox from "./Components/SideBox"
import Post from "./Components/Posts"
const App = ()=>{
    return(
        <>
        <Navbar/>
        <div className="main_container">
        <div className="page_content">
        <div className="main_content">
         <Story/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
        </div>
        <SideBox/>
        </div>
        </div>
        </>
    )
   
}

export default App;