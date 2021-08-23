import style from "../../Components/SetCounter/SetCounter.module.sass";
import React, {ChangeEvent} from "react";
import {Button} from "../../Button/Button";



type SetSecondCounterType = {
    changeSecondMaxValue: (value: number,message:string) => void
    changeSecondStartValue: (value: number,maxValue:number) => void
    addSecondStartValue: (startValue:number,message: string,collapsed:boolean) => void
    startMaxValue: number
    startValue: number
    startCounter: number
    startCollapsed:boolean
}

export const SetSecondCounter = (props:SetSecondCounterType)=> {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSecondMaxValue(Number(e.currentTarget.value),'enter values and press "set"')
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSecondStartValue(Number(e.currentTarget.value),props.startMaxValue)
    }
    const onClickStartValue = () => {
        props.addSecondStartValue(props.startValue,'',props.startCollapsed)
    }



    const disabledStartValue = props.startCounter >= props.startMaxValue || props.startValue < 0 || props.startCounter === props.startMaxValue
    return(
        <div className={style.content_blockTwo}>
            <div className={style.content_btnTwo}>
                <div className={style.maxValueBlock}>
                    <span>MaxValue:</span>
                    <div>
                        <input onChange={onChangeMaxValueHandler} value={props.startMaxValue} type="number"
                               className={props.startMaxValue <= props.startValue ? style.valueInputError : style.valueInput}/>
                    </div>
                </div>

                <div className={style.startValueBlock}>
                    <span>StartValue:</span>
                    <div>
                        <input onChange={onChangeStartValue} value={props.startValue}
                               type="number"
                               className={props.startValue >= props.startMaxValue ? style.valueInputError : style.valueInput}/>
                    </div>
                    <div>
                        <Button
                            callBack={onClickStartValue}
                            disabled={disabledStartValue}
                            title={'Set'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}