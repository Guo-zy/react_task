import {INCREMENT , DECREMENT } from "./actionTypes";
import {createReducer} from "@reduxjs/toolkit"

const defaultState = {
    totalValue: 0,
}

export default createReducer(defaultState , {
    [INCREMENT] : (state , action) => ({totalValue : state.totalValue + action.payload}),
    [DECREMENT] : (state , action) => ({totalValue : state.totalValue - action.payload}),
})



