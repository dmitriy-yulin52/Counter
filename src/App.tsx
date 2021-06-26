import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from "./Calculator/Calculator";


function App() {


    let[counter,setCounter] = useState(0)

    const incCounter =()=>{
        let newCounter = ++counter
        setCounter(newCounter)
    }
    const resCounter =()=>{
        setCounter(0)
    }

  return (
    <div className="App">
     <Calculator
         counter={counter}
         incCounter={incCounter}
         resCounter={resCounter}
     />
    </div>
  );
}

export default App;
