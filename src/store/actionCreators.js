import { INCREMENT, DECREMENT } from "./actionTypes";
export const addOneAction = () => ({
    type: INCREMENT,
    value: 1
})
export const subOneAction = () => ({
    type: DECREMENT,
    value: 1
})
export const subValueAction = value => ({
    type: DECREMENT,
    value
})
