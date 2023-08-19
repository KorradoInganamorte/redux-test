import { createSlice } from "@reduxjs/toolkit"

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        value: []
    },
    reducers: {
        ADD_CUSTOMER: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        GET_COSTOMER: (state) => {
            state.value
        },
    }
})

export const {ADD_CUSTOMER, GET_COSTOMER} = customerSlice.actions

export default customerSlice.reducer