
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");
  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onChange={handleChange} type="text"/>
        <p> {`Hello {name}`}</p>
    </div>
  )
}

export default App
