import React from 'react';
import c from './Calculator.module.css'
import {CounterContainer} from "../Components/Counter/CounterContainer";
import {SetCounterContainer} from "../Components/SetCounter/SetCounterContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../Redux/storeRedux";



export const Calculator = React.memo(() => {


    const {
        collapsed
    }= useSelector((state:AppStateType)=>state.calculator)
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
            {collapsed
                ? <CounterContainer/>
                :<SetCounterContainer/>
            }
        </div>
    )
})

