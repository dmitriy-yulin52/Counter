import React, {useEffect, useState} from 'react';
import './App.css';
import {Calculator} from "./Calculator/Calculator";
import CalculatorContainer from "./Calculator/CalculatorContainer";


function App() {


    // let [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickCounterValue')
    //     if (valueAsString) {
    //         let newCounterValue = JSON.parse(valueAsString)
    //         addStartValue(newCounterValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('clickCounterValue', JSON.stringify(counter))
    // }, [counter])

    // const incCounter = () => {
    //     setCounter(++counter)
    // }
    // const addStartValue = (startValue: number) => {
    //     setCounter(startValue)
    // }
    // const resCounter = (resValue: number) => {
    //     setCounter(resValue)
    // }


    return (
        <div className="App">
            {/*<Calculator*/}
            {/*    counter={counter}*/}
            {/*    incCounter={incCounter}*/}
            {/*    resCounter={resCounter}*/}
            {/*    addStartValue={addStartValue}*/}
            {/*/>*/}
            <CalculatorContainer/>
        </div>
    );
}

export default App;
