import React from 'react'
import {SecondCounter} from "./SecondCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/storeRedux";
import {useCallback} from "react";
import {
    SecondActionType,
    setSecondCollapsedAC,
    setSecondCounterAC, setSecondMaxValueAC, setSecondMessageAC, setSecondStartValueAC

} from "../../Redux/secondCounter-reducer";
import {SetSecondCounter} from "../SetSecondCounter/SetSecondCounter";
import {Dispatch} from "redux";


export const SecondCounterContainer = () => {


    let {
        startCounter,
        startCollapsed,
        startMaxValue,
        startValue,
        startMessage,
    } = useSelector((state: AppStateType) => state.secondCounter)

    const dispatch = useDispatch<Dispatch<SecondActionType>>()

    const setSecondIncCounter = useCallback((counter: number) => {
        dispatch(setSecondCounterAC(counter))
    }, [setSecondCounterAC])
    const setSecondResCounter = useCallback((resCounter: number) => {
        dispatch(setSecondCounterAC(resCounter))
    }, [setSecondCounterAC])
    const setSecondStartValue = useCallback((value: number, collapsed: boolean) => {
        dispatch(setSecondCounterAC(value))
        dispatch(setSecondCollapsedAC(collapsed))
    }, [setSecondCounterAC, setSecondCollapsedAC])

    const changeSecondMaxValue = useCallback((value: number,message:string) => {
        if (value) { // +
            dispatch(setSecondMessageAC(message))
        }
        dispatch(setSecondMaxValueAC(value)) // +
    }, [setSecondMaxValueAC, setSecondMessageAC])

    const changeSecondStartValue = useCallback((value: number, maxValue: number) => {
        if (value >= 0) {
            dispatch(setSecondMessageAC('enter values and press "set"'))
        }
        if (value < 0) {
            dispatch(setSecondMessageAC('Incorrect value'))

        }
        if (value >= maxValue) {
            dispatch(setSecondMessageAC('Incorrect value'))
        }
        dispatch(setSecondStartValueAC(value))
    }, [setSecondMessageAC, setSecondStartValueAC])

    const addSecondStartValue = useCallback((startValue: number, message: string, collapsed: boolean) => {
        dispatch(setSecondCounterAC(startValue))
        dispatch(setSecondMessageAC(message))
        dispatch(setSecondCollapsedAC(collapsed))
    }, [])

    return (
        <>
            <SecondCounter
                startCounter={startCounter}
                startCollapsed={startCollapsed}
                startMaxValue={startMaxValue}
                startValue={startValue}
                startMessage={startMessage}
                setSecondIncCounter={setSecondIncCounter}
                setSecondResCounter={setSecondResCounter}
                setSecondStartValue={setSecondStartValue}
            />
            <SetSecondCounter
                changeSecondMaxValue={changeSecondMaxValue}
                changeSecondStartValue={changeSecondStartValue}
                addSecondStartValue={addSecondStartValue}
                startMaxValue={startMaxValue}
                startValue={startValue}
                startCounter={startCounter}
                startCollapsed={startCollapsed}
            />
        </>
    )
}