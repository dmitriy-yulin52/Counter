import React from "react";
import style from './SecondCounter.module.sass'
import {Button} from "../../Button/Button";



type SecondCounterType = {
    startCounter:number
    startCollapsed:boolean
    startMaxValue:number
    startValue:number
    startMessage:string
    setSecondIncCounter:(counter:number)=> void
    setSecondResCounter:(resCounter:number)=> void
    setSecondStartValue:(value:number,collapsed:boolean)=> void
}

export const SecondCounter = (props:SecondCounterType)=> {


    const disabledInc = props.startMessage === 'Incorrect value' || props.startMessage === 'enter values and press "set"'
    const disabledRes = props.startMessage === 'Incorrect value' || props.startMessage === 'enter values and press "set"'
    const disabledStart = props.startValue >= props.startMaxValue || props.startValue < 0 || props.startCounter === props.startMaxValue


    const onClickCounterHandler = () => {
        props.setSecondIncCounter(props.startCounter + 1)
    }
    const onClickResCounterHandler = () => {
        props.setSecondResCounter(0)
    }
    const onClickStartValueHandler = () => {
        props.setSecondStartValue(props.startValue,!props.startCollapsed)
    }

    return(
        <div className={style.block}>
            <div>
                <div
                    className={props.startCounter >= props.startMaxValue ? style.error : style.counter}>{props.startMessage ? props.startMessage : props.startCounter}</div>
            </div>
            <div className={style.btn}>
                <Button
                    callBack={onClickCounterHandler}
                    disabled={disabledInc}
                    title={'Inc'}
                />

                <Button
                    callBack={onClickResCounterHandler}
                    disabled={disabledRes}
                    title={'Res'}
                />

            </div>
        </div>
    )
}