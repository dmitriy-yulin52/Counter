import React from "react";
import c from "../Calculator/Calculator.module.css";

type ButtonType = {
    disabled: boolean
    callBack: () => void
    title: string
}


export const Button: React.FC<ButtonType> = (props) => {
    const {callBack, title, disabled} = props

    const onClick = () => {
        callBack()
    }

    return (
        <button
            onClick={onClick}
            className={c.inc}
            disabled={disabled}
        >
            {title}
        </button>
    )
}