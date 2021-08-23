export enum SECOND_CALCULATOR_ACTION_TYPE {
    COUNTER = 'secondCounter-reducer/SET_COUNTER',
    MAX_VALUE = 'secondCounter-reducer/SET_MAX_VALUE',
    START_VALUE = 'secondCounter-reducer/SET_START_VALUE',
    MESSAGE = 'secondCounter-reducer/SET_MESSAGE',
    COLLAPSED = 'secondCounter-reducer/SET_COLLAPSED'
}


export type SecondCalculatorType = {
    startCounter: number
    startMaxValue: number
    startValue: number
    startMessage: string
    startCollapsed: boolean
}
export type SecondActionType =
    SetSecondCounterACType
    | SetSecondMaxValueACType
    | SetSecondStartValueACType
    | SetSecondMessageACType
    | SetSecondCollapsedACType


type SetSecondCounterACType = {
    type: SECOND_CALCULATOR_ACTION_TYPE.COUNTER,
    counter: number
}
type SetSecondMaxValueACType = {
    type: SECOND_CALCULATOR_ACTION_TYPE.MAX_VALUE,
    value: number
}
type SetSecondStartValueACType = {
    type: SECOND_CALCULATOR_ACTION_TYPE.START_VALUE,
    value: number
}
type SetSecondMessageACType = {
    type: SECOND_CALCULATOR_ACTION_TYPE.MESSAGE,
    message: string
}
type SetSecondCollapsedACType = {
    type: SECOND_CALCULATOR_ACTION_TYPE.COLLAPSED,
    collapsed: boolean
}


const SecondCalculatorInitialState = {
    startCounter: 0,
    startMaxValue: 5,
    startValue: 0,
    startMessage: '',
    startCollapsed: true
}


export const secondCounterReducer = (state: SecondCalculatorType = SecondCalculatorInitialState, action: SecondActionType): SecondCalculatorType => {
    switch (action.type) {
        case SECOND_CALCULATOR_ACTION_TYPE.COUNTER:
            return {
                ...state,
                startCounter: action.counter
            }
        case SECOND_CALCULATOR_ACTION_TYPE.MAX_VALUE:
            return {
                ...state,
                startMaxValue: action.value
            }
        case SECOND_CALCULATOR_ACTION_TYPE.START_VALUE:
            return {
                ...state,
                startValue: action.value
            }
        case SECOND_CALCULATOR_ACTION_TYPE.MESSAGE:
            return {
                ...state,
                startMessage: action.message
            }
        case SECOND_CALCULATOR_ACTION_TYPE.COLLAPSED:
            return {
                ...state,
                startCollapsed: action.collapsed
            }
        default:
            return state
    }
}



export const setSecondCounterAC = (counter: number): SetSecondCounterACType => {
    return {
        type: SECOND_CALCULATOR_ACTION_TYPE.COUNTER,
        counter
    }
}
export const setSecondMaxValueAC = (value: number): SetSecondMaxValueACType => {
    return {
        type: SECOND_CALCULATOR_ACTION_TYPE.MAX_VALUE,
        value
    }
}
export const setSecondStartValueAC = (value: number): SetSecondStartValueACType => {
    return {
        type: SECOND_CALCULATOR_ACTION_TYPE.START_VALUE,
        value
    }
}
export const setSecondMessageAC = (message: string): SetSecondMessageACType => {
    return {
        type: SECOND_CALCULATOR_ACTION_TYPE.MESSAGE,
        message
    }
}
export const setSecondCollapsedAC = (collapsed: boolean): SetSecondCollapsedACType => {
    return {
        type: SECOND_CALCULATOR_ACTION_TYPE.COLLAPSED,
        collapsed
    }
}

