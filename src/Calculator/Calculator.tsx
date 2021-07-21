import React from 'react';
import c from './Calculator.module.css'
import {CalculatorType} from "../Redux/calculator-reducer";
import {CounterContainer} from "../Components/Counter/CounterContainer";
import {SetCounterContainer} from "../Components/SetCounter/SeCounterContainer";


type PropsType = {
    calculator: CalculatorType

}
export const Calculator: React.FC<PropsType> = (props) => {
    const {calculator} = props


    //startValue
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickStartValue')
    //     if (valueAsString) {
    //         let newStartValue = JSON.parse(valueAsString)
    //         setStartValue(newStartValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('clickStartValue', JSON.stringify(startValue))
    // }, [startValue]);
    //
    // //maxValue
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickMaxValue')
    //     if (valueAsString) {
    //         let newMaxValue = JSON.parse(valueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    //     localStorage.removeItem('clickMaxValue')
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem('clickMaxValue', JSON.stringify(maxValue))
    // }, [maxValue])



    return (
        <div className={c.content}>
            {calculator.collapsed
                ? <CounterContainer/>
                :<SetCounterContainer/>
            }
        </div>
    )
}

