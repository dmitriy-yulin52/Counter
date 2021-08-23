import React from "react";
import {combineReducers, createStore} from "redux";
import {calculatorReducer} from "./calculator-reducer";
import {secondCounterReducer} from "./secondCounter-reducer";


let rootReducers = combineReducers({
    calculator: calculatorReducer,
    secondCounter:secondCounterReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)