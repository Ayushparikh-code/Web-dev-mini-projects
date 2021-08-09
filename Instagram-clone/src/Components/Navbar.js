import './style.css';
import navLogo from'../images/instalogo.png';
const Navbar = ()=>{
return(
    <>
    <nav>
        <ul className="leftNav">
     <img src={navLogo} alt="insta nav logo" className="logo"></img>
        </ul>
        <ul className="midNav">
        <i class="fas fa-search"></i>
        <input type="search" placeholder="search"></input>
        </ul>
        <ul className="rightNav">
            <li><i class="fas fa-home"></i></li>
            <li><i class="fas fa-location-arrow"></i></li>
            <li><i class="far fa-compass"></i></li>
            <li><i class="far fa-heart"></i></li>
            <li><i class="far fa-circle"></i></li>
        </ul>
    </nav>
    <hr></hr>

    </>
)
}

export default Navbar;