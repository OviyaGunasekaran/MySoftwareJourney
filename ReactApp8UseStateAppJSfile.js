import "./App.css"; 
import { useState } from "react";
function App() 
{
const [display, setDisplay] = useState(1000)

function incrementDisplay()
{
setDisplay(display+1); 
}
	
function decrementDisplay()
{
setDisplay(display-1); 
}
	
return (
   
  <>
  <h3> {display} </h3>
  <br/>
  <button onClick={incrementDisplay}> Increase </button>
  <button onClick={decrementDisplay}> Decrease </button>
  </>
  
    
  );
}

export default App;

