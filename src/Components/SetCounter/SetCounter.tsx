import React, {ChangeEvent} from 'react'
import style from "../../Components/SetCounter/SetCounter.module.sass";
import {Button} from "../../Button/Button";
import {CalculatorType} from "../../Redux/calculator-reducer";

type SetCounterType = {
    calculator: CalculatorType
    counter: (counter: number) => void
    smaxValue: (value: number) => void
    message: (message: string) => void
    sstartValue: (value: number) => void
    scollapsed:(collapsed:boolean)=> void
    maxValue:number
    startValue:number
    startCounter:number
    startCollapsed:boolean
}


export const SetCounter:React.FC<SetCounterType>=(props)=> {

    const {
        calculator,
        counter,
        maxValue,
        message,
        startValue,
        startCounter,
        startCollapsed,
    } = props


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
        if (+e.currentTarget.value >= maxValue) {
            message('Incorrect value')
        }
        startValue(+e.currentTarget.value)
    }
    const addStartValue = (startValue: number) => {
        counter(startValue)
    }
    const onClickStartValue = () => {
        addStartValue(startValue)
        message('')
        collapsed(!startCollapsed)
    }

    const disabledStartValue = startValue >= maxValue || startValue < 0 || startCounter === maxValue

    return(
        <div className={style.content_blockTwo}>
            <div className={style.content_btnTwo}>
                <div className={style.maxValueBlock}>
                    <span>MaxValue:</span>
                    <div>
                        <input onChange={onChangeMaxValue} value={maxValue} type="number"
                               className={maxValue <= startValue ? style.valueInputError : style.valueInput}/>
                    </div>
                </div>

                <div className={style.startValueBlock}>
                    <span>StartValue:</span>
                    <div>
                        <input onChange={onChangeStartValue} value={startValue}
                               type="number"
                               className={startValue >= maxValue ? style.valueInputError : style.valueInput}/>
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