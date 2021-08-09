import React,{useState} from "react";
import "./style.css";

const App = ()=>{
    const [count, setCount]= useState(0);
return(
    <div>
    <h1>COUNTER APP</h1> 
    <h3>The value of counter is {count}</h3> 
<button onClick={()=>count<25 ? setCount(count+1) : "" }>Increament</button>
<button onClick={()=>count>0 ? setCount (count-1) : ""}>Decreament</button>
<button onClick={()=>{ setCount(0)}}>Reset</button>
</div>
)
 
}

export default App;