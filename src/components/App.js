import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const[age,setAge] =useState(19);
const App = () => {
    function incrementAge() {
        age=age+1;
    }
       
    const handleClick =()=>{
        setAge(age+1)
    }
    
    return <><Child age={age}/>
    <button id="button" OnClick={handleClick} ></button>
    </>;
};

export default App;
