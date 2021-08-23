import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Counter} from "./Counter";
import {AppStateType} from "../../Redux/storeRedux";
import {setCollapsedAC, setCounterAC} from "../../Redux/calculator-reducer";



export const CounterContainer = React.memo(()=> {

    const {
        counter,
        collapsed,
        maxValue,
        startValue,
        message,
    } = useSelector((state:AppStateType)=>state.calculator)
    const dispatch = useDispatch()


    const setIncCounter = useCallback((counter:number) => {
        dispatch(setCounterAC(counter))
    },[setCounterAC,counter])
    const setResCounter = useCallback((resCounter:number) => {
        dispatch(setCounterAC(resCounter))
    },[setCounterAC])
    const setStartValue = useCallback((startValue:number,startCollapsed:boolean) => {
        dispatch(setCounterAC(startValue))
        dispatch(setCollapsedAC(startCollapsed))
    },[setCounterAC,setCollapsedAC])


    return(
        <Counter
            startCounter={counter}
            startCollapsed={collapsed}
            maxValue={maxValue}
            startValue={startValue}
            message={message}
            setIncCounter={setIncCounter}
            setResCounter={setResCounter}
            setStartValue={setStartValue}
        />
    )
})




