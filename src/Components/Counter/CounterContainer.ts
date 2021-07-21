import {connect} from "react-redux";
import {Counter} from "./Counter";
import {AppStateType} from "../../Redux/storeRedux";
import {CalculatorType, setCollapsedAC, setCounterAC} from "../../Redux/calculator-reducer";
import {Dispatch} from "redux";

type mapStateToProps = {
    calculator: CalculatorType
}
type mapDispatchToProps = {
    counter:(counter:number)=> void
    collapsed:(collapsed:boolean)=> void
}


const mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        calculator: state.calculator
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {
        counter:(counter:number)=> {
            dispatch(setCounterAC(counter))
        },
        collapsed:(collapsed:boolean)=> {
            dispatch(setCollapsedAC(collapsed))
        }

    }

}





export let CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)