import React from "react";
import c from "../Calculator/Calculator.module.css";

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