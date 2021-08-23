import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CopyCounter} from "./Counter";
import {AppStateType} from "../../Redux/storeRedux";
import {ActionType, setCollapsedAC, setCounterAC} from "../../Redux/calculator-reducer";
import {Dispatch} from "redux";



export const CounterContainer = React.memo(()=> {

    const {
        counter,
        collapsed,
        maxValue,
        startValue,
        message,
    } = useSelector((state:AppStateType)=>state.calculator)
    const dispatch = useDispatch<Dispatch<ActionType>>()


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
        <CopyCounter
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




