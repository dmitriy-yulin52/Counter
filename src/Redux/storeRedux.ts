import React from "react";
import {combineReducers, createStore} from "redux";
import {calculatorReducer} from "./calculator-reducer";


let rootReducers = combineReducers({
    calculator: calculatorReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)