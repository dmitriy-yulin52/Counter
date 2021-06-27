import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from "./Calculator/Calculator";


function App() {


    let[counter,setCounter] = useState(0)

    const incCounter =()=>{
        setCounter(++counter)
    }
    const addStartValue = (startValue:number)=> {
        setCounter(startValue)
    }
    const resCounter =(resValue: number)=>{
        setCounter(resValue)
    }

  return (
    <div className="App">
     <Calculator
         counter={counter}
         incCounter={incCounter}
         resCounter={resCounter}
         addStartValue={addStartValue}
     />
    </div>
  );
}

export default App;
