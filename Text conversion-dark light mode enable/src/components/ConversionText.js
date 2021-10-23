import React, { useState } from 'react'
import './App1.css'

export default function ConversionText(props) {

    //how to handle events

    const handleUpClick = () => {
        console.log("Clicked here " + text); //not important to write..this is for our understanding
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!!!", 'success')
    }

    const handleLoClick = () => {
        console.log("Clicked here " + text); //not important to write..this is for our understanding
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Lowercase done!!!", "success")
    }

    const handleClearClick = () => {
        console.log("Clicked here " + text);
        let newtext = "";
        setText(newtext);
        props.showAlert("Text cleared!!", 'success')
    }

    // const handleBoldClick = () => {
    //     console.log("Clicked here " + text);
    //     let newtext = text.style.fontWeight.bold;
    //     setText(newtext);
    // }

    const hadleCapFirstClick = () => {
        let firstchar = text.charAt(0);
        let newtext = firstchar.toUpperCase();
        setText(newtext + text.slice(1));
        props.showAlert("Capitalized first letter!!", "success")
    }

    const hadleTrimClick = () => {
        let newtext = text.trim();
        setText(newtext);
    }
    const hadleRemoverSpaceClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed!!!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard!!", 'success');
    }

    const Close = () => {
        //let conf=confirm(newText);
        //  conf(newText);
        let setText = "Are u sure";
        setText(setText);
        alert(setText);
    }

    //used for input    
    const handleOnChange = (event) => {
        console.log("on change");  //not important to write..this is for our understanding
        setText(event.target.value);
        // setText(event.target.value);   erro throw kr rha dont know why----doubt
        //allows to change the text as value{text} ki wjh se change nhi ho rha tha
    }

    const [text, setText] = useState("")
    //setText("New text here");
    //text="new text here";    this is wrong way of updating the text
    return (
        <div>

            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <br></br>
                <br></br>

                <h1  >{props.convertHeading}</h1>
                <div className="textformconvert mb-2">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} placeholder="Enter your text here." id="mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={hadleCapFirstClick}>Cap firstchar text</button>
                <button className="btn btn-primary mx-1" onClick={hadleTrimClick}>Trim</button>
                <button className="btn btn-primary mx-1" onClick={hadleRemoverSpaceClick}>Remove spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={Close}>Close</button>
            </div>
            <div className="container my-1" style={{ fontFamily: "cursive", fontSize: '1.3vw', backgroundColor: props.mode === 'dark' ? ' #1e1836' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
                {/*    //my used for distance spacing in y aixs*/}<br/>
                <h2>No of words and characters in the textbox: </h2><hr/>
                <div>
                    <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{text.length} characters including spaces</p>
                    <p>{text.split(/\s/).filter((element) => { return element.length !== 0 })} characters excluding spaces</p>
                    <p>You can read this words in {0.08 * text.split(" ").length} minutes.</p>
                    <p>Your typing speed is - {(text.split(" ").length / 5) / (0.08 * text.split(" ").length)}</p>
                </div>
                <div>
                    <h2>Preview</h2><hr/>
                    <p>{text.length > 0 ? text : "Enter text in above textarea to preview here"}</p>
                </div>
            </div>
        </div>
    )
}
