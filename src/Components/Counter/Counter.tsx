import style from "../Counter/Counter.module.sass";
import {Button} from "../../Button/Button";
import React from "react";

type CounterType = {
    startCounter:number
    startCollapsed:boolean
    maxValue:number
    startValue:number
    message:string
    setIncCounter:(counter:number)=> void
    setResCounter:(resCounter:number)=> void
    setStartValue:(startValue:number,startCollapsed:boolean)=> void
}

export const Counter:React.FC<CounterType> = React.memo((props) => {
    let {
        startCollapsed,
        startCounter,
        startValue,
        maxValue,
        message,
        setIncCounter,
        setResCounter,
        setStartValue,
    } = props


    const onClickCounterHandler = () => {
        setIncCounter(++startCounter)
    }
    const onClickResCounterHandler = () => {
        setResCounter(0)
    }
    const onClickStartValueHandler = () => {
        setStartValue(startValue,!startCollapsed)
    }

    const disabledIncCounter = startCounter >= maxValue || message === 'enter values and press "set"'
    const disabledResCounter = message === 'enter values and press "set"'
    const disabledStartValue = startValue >= maxValue || startValue < 0 || startCounter === maxValue

    return (
        <div className={style.content_block}>
            <div>
                <div
                    className={startCounter >= maxValue ? style.error : style.content_counter}>{message ? message : startCounter}</div>
            </div>
            <div className={style.content_btn}>
                <Button callBack={onClickCounterHandler}
                        disabled={disabledIncCounter}
                        title={'Inc'}
                />
                <Button callBack={onClickResCounterHandler}
                        disabled={disabledResCounter}
                        title={'Res'}
                />
                <Button callBack={onClickStartValueHandler}
                        disabled={disabledStartValue}
                        title={'Set'}
                />
            </div>
        </div>
    )
})
