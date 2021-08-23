import React from 'react'
import {SetCounter} from "./SetCounter";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/storeRedux";




export const SetCounterContainer = ()=> {

    const {
        startValue,
        maxValue,
        counter,
        collapsed,
    }= useSelector((state:AppStateType)=> state.calculator)




    return(
        <SetCounter
            startValue={startValue}
            maxValue={maxValue}
            startCounter={counter}
            startCollapsed={collapsed}
        />
    )
}



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