import React, {useCallback} from 'react'
import {SetCounter} from "./SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/storeRedux";
import {
    ActionType,
    setCollapsedAC,
    setCounterAC,
    setMaxValueAC,
    setMessageAC,
    setStartValueAC
} from "../../Redux/calculator-reducer";
import {Dispatch} from "redux";


export const SetCounterContainer = React.memo(() => {

    const {
        startValue,
        maxValue,
        counter,
        collapsed,
    } = useSelector((state: AppStateType) => state.calculator)

    const dispatch = useDispatch<Dispatch<ActionType>>()


    const changeMaxValue = useCallback((value: number) => {
        if (value) { // +
            dispatch(setMessageAC('enter values and press "set"'))
        }
        dispatch(setMaxValueAC(value)) // +
    },[setMaxValueAC,setMessageAC])
    const changeStartValue = useCallback((value: number) => {
        if (value >= 0) {
            dispatch(setMessageAC('enter values and press "set"'))
        }
        if (value < 0) {
            dispatch(setMessageAC('Incorrect value'))

        }
        if (value >= maxValue) {
            dispatch(setMessageAC('Incorrect value'))
        }
        dispatch(setStartValueAC(value))
    },[setMessageAC])

    const addStartValue = useCallback((message:string) => {
        dispatch(setCounterAC(startValue))
        dispatch(setMessageAC(message))
        dispatch(setCollapsedAC(!collapsed))
    },[startValue,!collapsed])


    return (
        <SetCounter
            startValue={startValue}
            maxValue={maxValue}
            startCounter={counter}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue}
            addStartValue={addStartValue}
        />
    )
})

