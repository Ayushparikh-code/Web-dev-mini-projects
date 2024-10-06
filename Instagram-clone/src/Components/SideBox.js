import './style.css'
import image from "../images/neerajchopra.webp";
import SideBoxImage from "./SideBoxImage"

const SideBox = ()=>{
    return(
        <>
        <div className="sideBox">
            <div>
            <img src={image}  className="sideBox_main_image" alt=""></img>
         <div>
         <h3>Jugesh Raghav</h3>
         <p>jugesh_raghav</p>
         </div>
            </div>
            <h3>Suggestions For You</h3>
            <SideBoxImage/>
         <SideBoxImage/>
         <SideBoxImage/>
         <SideBoxImage/>
         <SideBoxImage/>
         <SideBoxImage/>
        </div>
        </>
    )
}

export default SideBox