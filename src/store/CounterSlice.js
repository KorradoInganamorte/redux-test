import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "country",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state, action) => {
            console.log(state, action, counterSlice);
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer