import { combineReducers } from "@reduxjs/toolkit";
// import product from "./product";
import global from "./global";
import data from "./data";


export const combinedReducer = () =>
    combineReducers({
        global,
        data
    });
