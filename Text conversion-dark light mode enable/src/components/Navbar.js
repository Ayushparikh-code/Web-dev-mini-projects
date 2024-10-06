import React from 'react'
import PropTypes from 'prop-types'
import './App1.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (

        <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{fontFamily:"cursive",fontSize:'1.6vw',fontWeight:'bold'}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/event">Event</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {props.Dropdown}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="#">Action</a></li>
                                <li><a className="dropdown-item" to="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" to="#">Something else here</a></li>
                            </ul>
                            
                        </li>
                    </ul>
                    <form className="d-flex mx-2">
                        <button className="btn btn-outline-success" type="submit">Welcome {props.Name} !!!</button>
                    </form>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>

                    </div>
                    {/*<button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Dark Mode">
                    <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        </div>  
                        </button>*/}
                </div>
            </div>
        </nav>
    )
}

//propTypes
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //means it is required agr nhi likha toh error throw karega as default pe set kiya hai toh nhi krega
    Dropdown: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set your title',
    Dropdown: 'Dropdown title here'
};