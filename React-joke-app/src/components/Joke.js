import React, { useState, useEffect} from 'react' ;



function Joke()
{
  const url = "https://official-joke-api.appspot.com/random_joke"
  const[joke, setJoke] = useState({});

 

  useEffect(()=>{
   getjokes();
  },[])


  const getjokes = async () => {

    const response = await fetch(url);
    const jsonData = await response.json();
    setJoke(jsonData);

  };

      return(
        <div className="Joke">
        
        <div className="jokeAcutual">
         
          <h4 className="linenew">Here you go :)</h4>
          <h2 className="setup">{joke.setup}</h2>
         <em><h3 className="punchline">{joke.punchline}</h3></em> 
        </div>
      </div>
      )

} 

export default Joke


// {"id":304,
// "type":"general",
// "setup":"Where does batman go to the bathroom?",
// "punchline":"The batroom."}
// You asked for it ¯\_(ツ)_/¯