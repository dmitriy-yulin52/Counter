import React, {ChangeEvent} from 'react'
import style from "../../Components/SetCounter/SetCounter.module.sass";
import {Button} from "../../Button/Button";

type SetCounterType = {
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    addStartValue: (message: string) => void
    maxValue: number
    startValue: number
    startCounter: number
}


export const SetCounter: React.FC<SetCounterType> = (props) => {

    const {
        maxValue,
        startValue,
        startCounter,
        changeMaxValue,
        changeStartValue,
        addStartValue,
    } = props


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartValue(Number(e.currentTarget.value))
    }
    const onClickStartValue = () => {
        addStartValue('')
    }

    const disabledStartValue = startValue >= maxValue || startValue < 0 || startCounter === maxValue

    return (
        <div className={style.content_blockTwo}>
            <div className={style.content_btnTwo}>
                <div className={style.maxValueBlock}>
                    <span>MaxValue:</span>
                    <div>
                        <input onChange={onChangeMaxValueHandler} value={maxValue} type="number"
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