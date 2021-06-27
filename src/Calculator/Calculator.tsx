import React, {ChangeEvent, useState} from 'react';
import c from './Calculator.module.css'



type PropsType = {
    counter: number
    resCounter: (resValue:number) => void
    incCounter: () => void
    addStartValue: (startValue:number)=> void
}
export const Calculator: React.FC<PropsType> = (props) => {
    const {counter, resCounter, incCounter,addStartValue} = props

    let[maxValue,setMaxValue] = useState(5)
    let[startValue,setStartValue] = useState(0)
    let[message,setMessage] = useState('')


    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>)=>{
        if(+e.currentTarget.value){
            setMessage('enter values and press "set"')
        }
        setMaxValue(+e.currentTarget.value)
    }


    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>)=>{
        if(+e.currentTarget.value >= 0){
            setMessage('enter values and press "set"')
        }
        if(+e.currentTarget.value < 0){
            setMessage('Incorrect value')
        }
        if(+e.currentTarget.value >= maxValue){
            setMessage('Incorrect value')
        }
        setStartValue(+e.currentTarget.value)
    }
    const onClickStartValue =()=>{
        addStartValue(startValue)
        setMessage('')
    }


    const onClickResCounter = ()=>{
        resCounter(0)
    }



    return (
        <div className={c.content}>
            <div className={c.content_block}>
                <div>
                    <div className={ counter >= maxValue || startValue >= maxValue || startValue < 0  ? c.error : c.content_counter }>{message ? message : counter}</div>
                </div>
                <div className={c.content_btn}>
                    {/*<Button value={'Inc'} callBack={incCounter} counter={counter} disabled={counter >= 5}/>*/}
                    {/*<Button value={'Res'} callBack={resCounter} counter={counter} disabled={!counter}/>*/}
                    {/*counter >= maxValue || startValue >= maxValue || startValue < 0*/}
                    <button onClick={incCounter} className={c.inc} disabled={message === 'Incorrect value' || message === 'enter values and press "set"' || counter>= maxValue}>Inc</button>
                    <button onClick={onClickResCounter} className={c.inc} disabled={message === 'Incorrect value' || message === 'enter values and press "set"'}>Res</button>
                </div>
            </div>
            <div className={c.content_blockTwo}>
                <div className={c.content_btnTwo}>
                    <div className={c.maxValueBlock}>
                        <div>
                            <span>MaxValue:</span>  <input onChange={onChangeMaxValue} value={maxValue} type="number" className={ maxValue <= startValue ? c.valueInputError : c.valueInput}/>
                        </div>

                    </div>
                    <div className={c.startValueBlock}>
                        <div >
                            <span>StartValue:</span> <input onChange={onChangeStartValue} value={startValue} type="number" className={ startValue >= maxValue ? c.valueInputError : c.valueInput}/>
                        </div>
                        <div>
                            <button onClick={onClickStartValue} className={c.btnStartValue} disabled={startValue >= maxValue || startValue < 0 || counter === maxValue }>Set</button>
                        </div>
                    </div>
                    {/*<button onClick={onClickInc} className={props.counter >= 5 ? c.op :c.inc} disabled={props.counter >= 5}>Inc</button>*/}

                    {/*<button onClick={onClickRes} className={props.counter <= 4 ? c.op :c.res} disabled={props.counter <= 4}>Res</button>*/}
                </div>
            </div>
        </div>
    )
}

type ButtonType = {
    disabled: boolean
    value: string
    counter: number
    callBack: () => void
}


const Button: React.FC<ButtonType> = (props) => {
    const {callBack, value, disabled} = props

    const onClick = () => {
        callBack()
    }

    return (
        <button
            onClick={onClick}
            className={c.inc}
            disabled={disabled}
        >
            {value}
        </button>
    )
}