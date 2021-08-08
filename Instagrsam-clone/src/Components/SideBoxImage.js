import './style.css'
import image from "../images/neerajchopra.webp";

const SideBoxImage = () => {
    return (
        <>
            <div className="SideBoxImageContainer">
                    <img src={image} className="sideBox_image" alt=""></img>
                    <div>
                        <h4>Jugesh Raghav</h4>
                        <p>jugesh_raghav</p>
                    </div>
            </div>
        </>
    )
}

export default SideBoxImage