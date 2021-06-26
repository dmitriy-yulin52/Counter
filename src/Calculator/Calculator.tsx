import React from 'react';
import c from './Calculator.module.css'



type PropsType = {
    counter: number
    resCounter:()=>void
    incCounter:()=>void
}
export const Calculator:React.FC<PropsType> = (props) => {
    const {counter,resCounter,incCounter} = props

    return (
        <div className={c.content}>
            <div className={c.content_block}>
                <div className={counter >= 5 ? c.error : c.content_counter}>{counter}</div>
                <div className={c.content_btn}>
                    <Button value={'Inc'} callBack={incCounter} counter={counter} disabled={counter >= 5}/>
                    <Button value={'Res'} callBack={resCounter} counter={counter} disabled={!counter}/>
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
    counter:number
    callBack:()=>void
}


const Button:React.FC<ButtonType> =(props)=> {
    const{callBack,value,disabled} = props

    const onClick=()=>{
        callBack()
    }

    return(
        <button
            onClick={onClick}
            className={c.inc}
            disabled={disabled}
        >
            {value}
        </button>
    )
}