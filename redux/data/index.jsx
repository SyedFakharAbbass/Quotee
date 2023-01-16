import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request from "../request";
import { setLoading } from "../global";

const initialState = {
    products: "",
    styles: "",
    isLoading: false,
};

export const navDataRequest = createAsyncThunk(
    "navbar/navDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            await thunkAPI.dispatch(setLoading(true));
            response = await request
                .get(`featured-links`)
                .then((response) => response.data);
            // toast(<RequestMessage message="Message sent successfully!" />);
            return response;
            await thunkAPI.dispatch(setLoading(false));
        } catch (error) {
            console.log("Error", error);
            // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
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
        //   addToCarts: (state, action) => {
        //     state.carts = [...state.carts, action.payload];
        //     // action.payload.router.push("/cart");
        //   },
        //   moveToCheckout: (state, action) => {
        //     state.carts = [...state.carts, action.payload];
        //     // action.payload.router.push("/checkout");
        //   },
        //   updateCart: (state, action) => {
        //     const index = state.carts.findIndex((o) => o.id === action.payload.id);
        //     if (index >= 0) {
        //       state.carts[index] = action.payload;
        //     }
        //   },
        //   emptyCart: (state, action) => {
        //     state.carts = [];
        //     state.totalPrice = 0;
        //     state.totalQuantity = 0;
        //   },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            console.log("HYDRATE", action.payload);
            // state.header = action?.payload?.home?.header ? action.payload.home.header : state?.header;
        });
        // builder.addCase(sentDataRequest.pending, (state) => {
        //   state.isLoading = true;
        // });
        // builder.addCase(sentDataRequest.fulfilled, (state, action) => {
        //   state.homeData = action.payload;
        //   state.isLoading = false;
        // });
        // builder.addCase(sentDataRequest.rejected, (state, action) => {
        //   state.isLoading = false;
        //   console.log("Error:", { message: action.payload.message });
        // });
    },
});

export const {
    setProducts,
    setStyles,
    // setCarts,
    // addToCarts,
    // moveToCheckout,
} = dataSlice.actions;

export default dataSlice.reducer;
