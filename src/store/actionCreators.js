import { INCREMENT, DECREMENT } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addOneAction = createAction(INCREMENT, (number) => ({
  payload: number,
}));

export const subValueAction = createAction(DECREMENT, (number) => ({
  payload: number,
}));
