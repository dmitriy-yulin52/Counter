import React, {ChangeEvent, useEffect, useState} from 'react';
import c from './Calculator.module.css'
import {Button} from "../Button/Button";
import {CalculatorType} from "../Redux/calculator-reducer";


type PropsType = {
    calculator:CalculatorType
    counter: (counter:number)=> void
    maxValue: (value: number) => void
    startValue: (value: number) => void
    message: (message: string) => void
}
export const Calculator: React.FC<PropsType> = (props) => {
    const {counter, maxValue, startValue, message,calculator} = props

    // let [maxValue, setMaxValue] = useState(5)
    // let [startValue, setStartValue] = useState(0)
    // let [message, setMessage] = useState('')
    let [active, setActive] = useState(false)
    let [collapsed, setCollapsed] = useState(true)

    //startValue
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickStartValue')
    //     if (valueAsString) {
    //         let newStartValue = JSON.parse(valueAsString)
    //         setStartValue(newStartValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('clickStartValue', JSON.stringify(startValue))
    // }, [startValue]);
    //
    // //maxValue
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickMaxValue')
    //     if (valueAsString) {
    //         let newMaxValue = JSON.parse(valueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    //     localStorage.removeItem('clickMaxValue')
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem('clickMaxValue', JSON.stringify(maxValue))
    // }, [maxValue])

    const incCounter = () => {
        counter(++calculator.counter)
    }

    const resCounter = (resValue: number) => {
        counter(resValue)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value) {
            message('enter values and press "set"')
        }
        maxValue(+e.currentTarget.value)

    }
    const addStartValue = (startValue: number) => {
        counter(startValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            message('enter values and press "set"')
            setActive(false)
        }
        if (+e.currentTarget.value < 0) {
            message('Incorrect value')
            setActive(true)

        }
        if (+e.currentTarget.value >= calculator.maxValue) {
            message('Incorrect value')
            setActive(true)
        }
        startValue(+e.currentTarget.value)
    }
    const onClickStartValue = () => {
        addStartValue(calculator.startValue)
        message('')
        setCollapsed(!collapsed)
    }
    const onClickResCounter = () => {
        resCounter(0)
    }


    return (
        <div className={c.content}>

            { collapsed ? <div className={c.content_block}>
                <div>
                    <div
                        className={active ? c.error : c.content_counter && counter >= maxValue ? c.error : c.content_counter}>{calculator.message ? calculator.message : calculator.counter}</div>
                </div>
                <div className={c.content_btn}>
                    <Button callBack={incCounter}
                            disabled={active || calculator.counter >= calculator.maxValue || calculator.message === 'enter values and press "set"'}
                            title={'Inc'}
                    />
                    <Button callBack={onClickResCounter}
                            disabled={active || calculator.message === 'enter values and press "set"'}
                            title={'Res'}
                    />
                    <Button callBack={onClickStartValue}
                            disabled={calculator.startValue >= calculator.maxValue || calculator.startValue < 0 || calculator.counter === calculator.maxValue}
                            title={'Set'}
                    />
                </div>
            </div>
            :
            <div className={c.content_blockTwo}>
                <div className={c.content_btnTwo}>
                    <div className={c.maxValueBlock}>
                        <span>MaxValue:</span>
                        <div>
                            <input onChange={onChangeMaxValue} value={calculator.maxValue} type="number"
                                   className={calculator.maxValue <= calculator.startValue ? c.valueInputError : c.valueInput}/>
                        </div>
                    </div>

                    <div className={c.startValueBlock}>
                        <span>StartValue:</span>
                        <div>
                            <input onChange={onChangeStartValue} value={calculator.startValue}
                                   type="number"
                                   className={calculator.startValue >= calculator.maxValue ? c.valueInputError : c.valueInput}/>
                        </div>
                        <div>
                            <Button callBack={onClickStartValue}
                                    disabled={calculator.startValue >= calculator.maxValue || calculator.startValue < 0 || calculator.counter === calculator.maxValue}
                                    title={'Set'}
                            />
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    )
}

