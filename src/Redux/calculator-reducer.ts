export enum CALCULATOR_ACTION_TYPE {
    SET_COUNTER = 'calculator-reducer/SET_COUNTER',
    SET_MAX_VALUE = 'calculator-reducer/SET_MAX_VALUE',
    SET_START_VALUE = 'calculator-reducer/SET_START_VALUE',
    SET_MESSAGE = 'calculator-reducer/SET_MESSAGE',
    SET_COLLAPSED = 'calculator-reducer/SET_COLLAPSED'
}


export type CalculatorType = typeof initialState
type ActionType =
    SetCounterACType
    | SetMaxValueACType
    | SetStartValueACType
    | SetMessageACType
    | SetCollapsedACType


type SetCounterACType = {
    type: CALCULATOR_ACTION_TYPE.SET_COUNTER,
    counter: number
}
type SetMaxValueACType = {
    type: CALCULATOR_ACTION_TYPE.SET_MAX_VALUE,
    value: number
}
type SetStartValueACType = {
    type: CALCULATOR_ACTION_TYPE.SET_START_VALUE,
    value: number
}
type SetMessageACType = {
    type: CALCULATOR_ACTION_TYPE.SET_MESSAGE,
    message: string
}
type SetCollapsedACType = {
    type: CALCULATOR_ACTION_TYPE.SET_COLLAPSED,
    collapsed: boolean
}


const initialState = {
    counter: 0,
    maxValue: 5,
    startValue: 0,
    message: '',
    collapsed: true
}


export const calculatorReducer = (state: CalculatorType = initialState, action: ActionType): CalculatorType => {
    switch (action.type) {
        case CALCULATOR_ACTION_TYPE.SET_COUNTER:
            return {
                ...state,
                counter: action.counter
            }
        case CALCULATOR_ACTION_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.value
            }
        case CALCULATOR_ACTION_TYPE.SET_START_VALUE:
            return {
                ...state,
                startValue: action.value
            }
        case CALCULATOR_ACTION_TYPE.SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case CALCULATOR_ACTION_TYPE.SET_COLLAPSED:
            return {
                ...state,
                collapsed: action.collapsed
            }
        default:
            return state
    }
}

export const setCounterAC = (counter: number): SetCounterACType => {
    return {
        type: CALCULATOR_ACTION_TYPE.SET_COUNTER,
        counter
    }
}
export const setMaxValueAC = (value: number): SetMaxValueACType => {
    return {
        type: CALCULATOR_ACTION_TYPE.SET_MAX_VALUE,
        value
    }
}
export const setStartValueAC = (value: number): SetStartValueACType => {
    return {
        type: CALCULATOR_ACTION_TYPE.SET_START_VALUE,
        value
    }
}
export const setMessageAC = (message: string): SetMessageACType => {
    return {
        type: CALCULATOR_ACTION_TYPE.SET_MESSAGE,
        message
    }
}
export const setCollapsedAC = (collapsed: boolean): SetCollapsedACType => {
    return {
        type: CALCULATOR_ACTION_TYPE.SET_COLLAPSED,
        collapsed
    }
}

