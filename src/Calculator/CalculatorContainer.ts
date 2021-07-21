import {connect} from "react-redux";
import {Calculator} from "./Calculator";
import {AppStateType} from "../Redux/storeRedux";
import {
    CalculatorType,
    setCollapsedAC,
    setCounterAC,
    setMaxValueAC,
    setMessageAC,
    setStartValueAC
} from "../Redux/calculator-reducer";
import { Dispatch } from 'redux';



type mapStateToPropsType = {
    calculator: CalculatorType
}
type mapDispatchToPropsType ={
    counter: (counter:number)=> void
    maxValue:(value: number)=> void
    startValue:(value: number)=> void
    message:(message: string)=> void
    collapsed:(collapsed:boolean)=> void
}



const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        calculator: state.calculator
    }
}


const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        counter:(counter:number)=> {
            dispatch(setCounterAC(counter))
        },
        maxValue: (value:number)=> {
            dispatch(setMaxValueAC(value))
        },
        startValue:(value:number)=> {
            dispatch(setStartValueAC(value))
        },
        message:(message:string)=> {
            dispatch(setMessageAC(message))
        },
        collapsed:(collapsed:boolean)=> {
            dispatch(setCollapsedAC(collapsed))
        }
    }
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps) (Calculator)

export default  CalculatorContainer