import React from 'react'
import './App1.css';

export default function TextForm(props) {
    const handleSubmitClick = () => {
        props.showAlert("Submitted ur details", "success");
    }
    return (
        <form >
            <div className='contactform' style={{fontFamily:'cursive', color: props.mode === 'light' ? 'black' : 'white', style: 'center' }}>
                <br />
                <h1 className="ContactHeading" style={{ color: props.mode === 'light' ? 'black' : 'white', style: 'center' }}>{props.ContactTitle}</h1>
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label><br />
                <div className=" input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="row">
                    <div class="col">
                        <label for="validationCustom01">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" placeholder="Enter first name" required/>
                        <div class ="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" placeholder="Enter last name" required/>
                        <div class ="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3" style={{ display: 'block' }}>
                    <label htmlFor="exampleFormControlSelect1">Branch</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Select</option>
                        <option>Cs</option>
                        <option>It</option>
                        <option>Mech</option>
                        <option>Civil</option>
                        <option>Ai&Ds</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Description</label>
                    <textarea className="form-control" id="mybox" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block w-100 my-2" onClick={handleSubmitClick}>Submit</button>
            </div>
        </form>
    )
}
