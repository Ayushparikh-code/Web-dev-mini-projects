import React, { Component } from 'react'
import './App1.css';
export class DisposeItem extends Component {
    render() {
        //destructuring
        let {title,description,ImgUrl,NewUrl} = this.props;
        return (
            <div className='container'>
                <div className="card" >
                    <img src={ImgUrl} style={{height:'10rem'}} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href={NewUrl} target="_blank" className ="btn  btn-primary">Learn more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisposeItem
