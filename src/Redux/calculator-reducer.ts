





export type CalculatorType = typeof initialState
type ActionType =
    ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setCounterAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMessageAC>


const initialState = {
    counter: 0,
    maxValue: 5,
    startValue: 0,
    message: ''
}

export const calculatorReducer = (state:CalculatorType = initialState , action:ActionType):CalculatorType => {
    switch (action.type){
        case "counter":
            return {
                ...state,
                counter:action.counter
            }
        case "maxValue":
            return {
                ...state,
                maxValue: action.value
            }
        case "startValue":
            return {
                ...state,
                startValue: action.value
            }
        case "message":
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export const setCounterAC = (counter: number) => {
    return {type: "counter", counter} as const
}
export const setMaxValueAC = (value: number) => {
    return {type: "maxValue", value} as const
}
export const setStartValueAC = (value: number) => {
    return {type: "startValue", value} as const
}
export const setMessageAC = (message: string) => {
    return {type: "message", message} as const
}

