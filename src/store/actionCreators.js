import { INCREMENT, DECREMENT } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addOneAction = createAction(INCREMENT, () => ({
  payload: 1,
}));

export const subOneAction = createAction(DECREMENT, () => ({
  payload: 1,
}));

export const subValueAction = createAction(DECREMENT, (number) => ({
  payload: number,
}));
