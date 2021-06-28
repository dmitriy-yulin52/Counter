import React, {ChangeEvent, useEffect, useState} from 'react';
import c from './Calculator.module.css'


type PropsType = {
    counter: number
    resCounter: (resValue: number) => void
    incCounter: () => void
    addStartValue: (startValue: number) => void
}
export const Calculator: React.FC<PropsType> = (props) => {
    const {counter, resCounter, incCounter, addStartValue} = props

    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    let [message, setMessage] = useState('')
    let [active, setActive] = useState(false)

    //startValue
    useEffect(() => {
        let valueAsString = localStorage.getItem('clickStartValue')
        if (valueAsString) {
            let newStartValue = JSON.parse(valueAsString)
            setStartValue(newStartValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('clickStartValue', JSON.stringify(startValue))
    }, [startValue]);

    //maxValue
    useEffect(() => {
        let valueAsString = localStorage.getItem('clickMaxValue')
        if (valueAsString) {
            let newMaxValue = JSON.parse(valueAsString)
            setMaxValue(newMaxValue)
        }
        localStorage.removeItem('clickMaxValue')
    }, []);
    useEffect(() => {
        localStorage.setItem('clickMaxValue', JSON.stringify(maxValue))
    }, [maxValue])


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value) {
            setMessage('enter values and press "set"')
        }
        setMaxValue(+e.currentTarget.value)

    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            setMessage('enter values and press "set"')
            // setStartValue(+e.currentTarget.value)
            setActive(false)
        }
        if (+e.currentTarget.value < 0) {
            setMessage('Incorrect value')
            // setStartValue(+e.currentTarget.value)
            setActive(true)

        }
        if (+e.currentTarget.value >= maxValue) {
            setMessage('Incorrect value')
            // setStartValue(+e.currentTarget.value)
            setActive(true)
        }
        setStartValue(+e.currentTarget.value)
    }
    const onClickStartValue = () => {
        addStartValue(startValue)
        setMessage('')
    }
    const onClickResCounter = () => {
        resCounter(0)
    }



    return (
        <div className={c.content}>
            <div className={c.content_block}>
                {/*<div>*/}
                {/*    <div*/}
                {/*        className={counter >= maxValue || startValue >= maxValue || startValue < 0 ? c.error : c.content_counter}>{message ? message : counter}</div>*/}
                {/*</div>*/}
                <div>
                    <div
                        className={active ? c.error : c.content_counter && counter >= maxValue ? c.error : c.content_counter}>{message ? message : counter}</div>
                </div>
                <div className={c.content_btn}>
                    {/*<Button value={'Inc'} callBack={incCounter} counter={counter} disabled={counter >= 5}/>*/}
                    {/*<Button value={'Res'} callBack={resCounter} counter={counter} disabled={!counter}/>*/}
                    <button onClick={incCounter} className={c.inc}
                            disabled={message === 'Incorrect value' || message === 'enter values and press "set"' || counter >= maxValue}>Inc
                    </button>
                    <button onClick={onClickResCounter} className={c.inc}
                            disabled={message === 'Incorrect value' || message === 'enter values and press "set"'}>Res
                    </button>
                </div>
            </div>
            <div className={c.content_blockTwo}>
                <div className={c.content_btnTwo}>
                    <div className={c.maxValueBlock}>
                        <span>MaxValue:</span>
                        <div>
                            <input onChange={onChangeMaxValue} value={maxValue} type="number"
                                   className={maxValue <= startValue ? c.valueInputError : c.valueInput}/>
                        </div>

                    </div>
                    <div className={c.startValueBlock}>
                        <span>StartValue:</span>
                        <div>
                            <input onChange={onChangeStartValue} value={startValue}
                                   type="number"
                                   className={startValue >= maxValue ? c.valueInputError : c.valueInput}/>
                        </div>
                        <div>
                            <button onClick={onClickStartValue} className={c.btnStartValue}
                                    disabled={startValue >= maxValue || startValue < 0 || counter === maxValue}>Set
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

