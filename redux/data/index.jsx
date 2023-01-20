import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";
import { Router } from "next/router";
import { toast } from "react-toastify";
import RequestMessage from "@/components/Request";

const initialState = {
    products: "",
    form1: {},
    styles: "",
    isLoading: false,
    submitData: {},
};

export const submitRequest = createAsyncThunk(
    "data/submitRequest",
    async (payload, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios
                .post(`${baseURL}ordersss`,payload)
                .then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            thunkAPI.dispatch(setProducts(""));
            thunkAPI.dispatch(setStyles(""));
            toast(<RequestMessage message="SUBMITTED SUCCESSFULLY" color="text-[#179814]" image="/images/congrate.png"/>);
            return response;
        } catch (error) {
            console.log("Error", error);
            toast(<RequestMessage message="SOMETHING WENT WRONG..!" color="text-red-500" image="/images/error.png"/>);
            return null;
        }
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setStyles: (state, action) => {
            state.styles = action.payload;
        },
        setForm: (state, action) => {
            state.form1 = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            console.log("HYDRATE", action.payload);
            state.submitData = action?.payload?.data?.submitData ? action.payload.data.submitData : state?.submitData;
        });
        builder.addCase(submitRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(submitRequest.fulfilled, (state, action) => {
            state.submitData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(submitRequest.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error:", { message: action.payload.message });
        });
    },
});

export const {
    setProducts,
    setStyles,
    setForm
} = dataSlice.actions;

export default dataSlice.reducer;
