import React, {ChangeEvent} from 'react'
import style from "../../Components/SetCounter/SetCounter.module.sass";
import {Button} from "../../Button/Button";
import {CalculatorType} from "../../Redux/calculator-reducer";

type SetCounterType = {
    calculator: CalculatorType
    counter: (counter: number) => void
    maxValue: (value: number) => void
    message: (message: string) => void
    startValue: (value: number) => void
    collapsed:(collapsed:boolean)=> void
}


export const SetCounter:React.FC<SetCounterType>=(props)=> {
    const {calculator,counter,maxValue,message,startValue,collapsed} = props


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value) {
            message('enter values and press "set"')
        }
        maxValue(+e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            message('enter values and press "set"')
        }
        if (+e.currentTarget.value < 0) {
            message('Incorrect value')

        }
        if (+e.currentTarget.value >= calculator.maxValue) {
            message('Incorrect value')
        }
        startValue(+e.currentTarget.value)
    }
    const addStartValue = (startValue: number) => {
        counter(startValue)
    }
    const onClickStartValue = () => {
        addStartValue(calculator.startValue)
        message('')
        collapsed(!calculator.collapsed)
    }

    const disabledStartValue = calculator.startValue >= calculator.maxValue || calculator.startValue < 0 || calculator.counter === calculator.maxValue

    return(
        <div className={style.content_blockTwo}>
            <div className={style.content_btnTwo}>
                <div className={style.maxValueBlock}>
                    <span>MaxValue:</span>
                    <div>
                        <input onChange={onChangeMaxValue} value={calculator.maxValue} type="number"
                               className={calculator.maxValue <= calculator.startValue ? style.valueInputError : style.valueInput}/>
                    </div>
                </div>

                <div className={style.startValueBlock}>
                    <span>StartValue:</span>
                    <div>
                        <input onChange={onChangeStartValue} value={calculator.startValue}
                               type="number"
                               className={calculator.startValue >= calculator.maxValue ? style.valueInputError : style.valueInput}/>
                    </div>
                    <div>
                        <Button callBack={onClickStartValue}
                                disabled={disabledStartValue}
                                title={'Set'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}