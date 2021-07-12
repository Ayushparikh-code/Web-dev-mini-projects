import React, { Component } from 'react'
import Joke from './Joke';



        function Home() {
  
            function refreshPage() {
              window.location.reload(false);
            }


        return (
            <div>
                <div className = "Title">
                    <h1>Lame Joke Generator.</h1>
                    <h4 className = "line2">You asked for it  ¯\_(ツ)_/¯</h4>
                </div>

                <Joke/>

                <div className="generatorButton" onClick = {refreshPage}>
                One More!
                </div>
                
            </div>
        )
    }


export default Home
