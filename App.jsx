import React from 'react'
import './index.css'

import { useState } from 'react'

const App = () => {
const[img,setimg]=useState("");
const[loading,setloading]=useState(false)
const[data,setdata]=useState("");
const[size,setsize]=useState(200);
function downlode(){
  fetch(img).then((response)=>response.blob()).then((blob)=>{
    const link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
}
async function generateQr(){
 
  setloading(true);
  try {
    setimg(encodeURI(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`))
  } catch (error) {
    console.error("Error in generating qr code");
    
  }
  finally{
    setloading(false)
  }

}
  return (
    <>
    <div id="container">
      {loading && <h1>Please wait ...</h1>}
      {img && <img src={img} alt="Qr code" />}
      <h1>Data for the Qr code</h1>
      <input type="text" placeholder='Enter your content to generate Qr' autoFocus onChange={(e)=>{setdata(e.target.value)}}/>
      <h1>size of the Qr code</h1>
      <input type="text" placeholder='Enter the size of the QrCode'autoFocus onChange={(e)=>{setsize(e.target.value);console.log(e.target.value)}}/><br />
      <button className='generate' onClick={generateQr} disabled={loading}>GENERATE </button>
      <button className='downlode' onClick={downlode}>DOWNLODE</button>
 
    <p>&#9400; Designed by BoobeshKumar</p>
   
    </div>
    </>
  )
}

export default App