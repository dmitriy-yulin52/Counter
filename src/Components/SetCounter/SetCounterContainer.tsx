import React, {ChangeEvent, useCallback} from 'react'
import {SetCounter} from "./SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/storeRedux";
import {
    setCollapsedAC,
    setCounterAC,
    setMaxValueAC,
    setMessageAC,
    setStartValueAC
} from "../../Redux/calculator-reducer";


export const SetCounterContainer = React.memo(() => {

    const {
        startValue,
        maxValue,
        counter,
        collapsed,
    } = useSelector((state: AppStateType) => state.calculator)

    const dispatch = useDispatch()


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
    },[setMessageAC,])

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


//
// type mapStateToPropsType = {
//     calculator: CalculatorType
// }
// type mapDispatchToPropsType = {
//     counter: (counter: number) => void
//     maxValue: (value: number) => void
//     message: (message: string) => void
//     startValue: (value: number) => void
//     collapsed:(collapsed:boolean)=> void
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         calculator: state.calculator
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         counter: (counter: number) => {
//             dispatch(setCounterAC(counter))
//         },
//         maxValue: (value: number) => {
//             dispatch(setMaxValueAC(value))
//         },
//         message: (message: string) => {
//             dispatch(setMessageAC(message))
//         },
//         startValue: (value: number) => {
//             dispatch(setStartValueAC(value))
//         },
//         collapsed:(collapsed:boolean)=> {
//             dispatch(setCollapsedAC(collapsed))
//         }
//     }
// }


// export let SetCounterContainer = connect(mapStateToProps, mapDispatchToProps)(SetCounter)