import style from "../Counter/Counter.module.sass";
import {Button} from "../../Button/Button";
import React, {useState} from "react";
import {CalculatorType} from "../../Redux/calculator-reducer";

type CounterType = {
    calculator: CalculatorType
    counter: (counter: number) => void
    collapsed:(collapsed:boolean)=> void

}

export const Counter: React.FC<CounterType> = (props) => {
    const {counter, calculator,collapsed} = props


    const incCounter =()=> {
        counter(++calculator.counter)
    }
    const onClickResCounter =()=> {
        counter(0)
    }
    const onClickStartValue = ()=> {
        counter(calculator.startValue)
        collapsed(!calculator.collapsed)
    }

    const disabledIncCounter = calculator.counter >= calculator.maxValue || calculator.message === 'enter values and press "set"'
    const disabledResCounter = calculator.message === 'enter values and press "set"'
    const disabledStartValue = calculator.startValue >= calculator.maxValue || calculator.startValue < 0 || calculator.counter === calculator.maxValue

    return (
        <div className={style.content_block}>
            <div >
                <div
                    className={calculator.counter >= calculator.maxValue ? style.error : style.content_counter}>{calculator.message ? calculator.message : calculator.counter}</div>
            </div>
            <div className={style.content_btn}>
                <Button callBack={incCounter}
                        disabled={disabledIncCounter}
                        title={'Inc'}
                />
                <Button callBack={onClickResCounter}
                        disabled={disabledResCounter}
                        title={'Res'}
                />
                <Button callBack={onClickStartValue}
                        disabled={disabledStartValue}
                        title={'Set'}
                />
            </div>
        </div>
    )
}
